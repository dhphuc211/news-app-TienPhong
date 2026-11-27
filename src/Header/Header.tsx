import scss from './Header.module.scss'

import { useNavigate, useLocation, Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'
import {useEffect, useState} from 'react'
import {Categories, Mega_Categories} from "./HeaderData.ts";




const Header = ()=>
{

    const navigate = useNavigate()
    const location = useLocation ()
    const [searchValue, setSearchValue] = useState<string>("")
    const [isMegaOpen, setIsMegaOpen] = useState<boolean>(false);
    useEffect(() => {
       setIsMegaOpen(false)
    },[location.pathname]);
                        
    const today = new Date();
    const formattedDate = today.toLocaleDateString('vi-VN',
    {
        weekday: 'long' ,day: '2-digit', month: '2-digit', year: 'numeric'
    });


    const searchNews = ()=>
    {
        if(!searchValue.trim()){
            return;
        }
        navigate(`/search-news/${searchValue.toLowerCase().trim()}`)
        setSearchValue('')
    }
    const allCategories = [
        ...Categories.filter((cate)=>cate.route!=='/moi-nhat'),
        ...Mega_Categories
    ];


    return(
        <header>
            <div className={scss.header}>
                <div className={scss.logo}>
                    <div className={scss.img_container}>
                        <img src="../../public/assets/imgs/tienphong_logo.webp" alt="tienphong_logo" loading='lazy'/>
                    </div>
                    <div className={scss.header_title}>
                        <h1 onClick={()=>{navigate('/')}}>Tiền Phong</h1>
                        <h2>cơ quan trung ương của đoàn tncs hồ chí minh</h2>
                    </div>
                </div>

                <div className={scss.search_bar}>
                    <form onSubmit={(e)=>
                        {
                            e.preventDefault()
                            if(!searchValue) return;
                            searchNews()
                        }}>
                        <input type="text" placeholder='Tìm kiếm bài báo...' onChange={(e)=>
                        {
                            setSearchValue(e.target.value)
                        }} value={searchValue}/>
                    </form>
                </div>

                <nav className={scss.actions}>
                    <ul>
                        <li onClick={()=>{searchNews()}}><i className="fa-solid fa-magnifying-glass"></i></li>
                        <li><i className="fa-regular fa-circle-user"></i></li>
                        <li><ThemeToggle /></li>
                    </ul>
                </nav>
                
            </div>
            <div className={scss.site_header}>
                    <div className={scss.top_wrapper}>
                        <div className={scss.container}>
                            <span>{formattedDate}</span>
                            <div className={scss.relate_website}>
                                <Link to={'/'} className={scss.list}>Hotline: 0865.015.015</Link>
                                <Link to={'/nhat-bao'} className={scss.list}>Tiền Phong Nhật báo</Link>
                                <Link to={'/'} className={scss.list}>Sinh viên Việt Nam</Link>
                                <Link to={'/'} className={scss.list}>Hoa Học trò</Link>
                                <Link to={'/'} className={scss.list}>Tòa soạn</Link>
                                <Link to={'/'} className={scss.list}>Quảng cáo</Link>
                            </div>
                            <div className={scss.lang_social}>

                                <a href="https://www.facebook.com/www.tienphong.vn/" target="_blank" rel="noopener noreferrer" title="Facebook">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a className={scss.faYoutube} href="https://www.youtube.com/@baotienphong" target="_blank" rel="noopener noreferrer" title="Youtube">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={scss.main_wrapper}>
                        <a href="/">
                            <h1>Tiềnphong</h1>
                            <p>CƠ QUAN TRUNG ƯƠNG CỦA ĐOÀN TNCS HỒ CHÍ MINH</p>
                        </a>
                    </div>
                    <div className={scss.navigation_wrapper}>
                        <div className={scss.container}>
                            <ul className={scss.navigation_list}>
                                <li className={`${scss.homepage} ${location.pathname === '/' ? scss.active : ''}`} title={'Trang chủ'} onClick={()=>{navigate('/')}}>
                                   <i className="fa-solid fa-house"></i>
                                </li>
                                {
                                    Categories.map((category)=>{
                                        const isActive= location.pathname===category.route|| category.subCategory?.some((sub)=>sub.route===location.pathname);
                                        return (
                                            //phần category khi có thêm phần subcate để menu có thể đổ xuống thấy các mục con
                                            <li key={category.route} className={`${scss.text} ${isActive ? scss.active : ''}`} title={category.title} onClick={()=>navigate(category.route)}>
                                                <span>{category.title}</span>
                                                {category.subCategory && category.subCategory.length>0 && (
                                                    <ul className={scss.dropdown_menu}>
                                                        {category.subCategory.map((sub)=>(
                                                            <li key={sub.route} className={location.pathname===sub.route?scss.sub_active:''}
                                                                onClick={(e)=>{
                                                                    e.stopPropagation();
                                                                    navigate(sub.route);
                                                                }}
                                                            >
                                                                {sub.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                            </li>
                                        )
                                    })

                                }
                            </ul>
                            <div className={scss.mega_menu} title={'Xem thêm'} onClick={()=>setIsMegaOpen((prev)=>!prev)}>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        {
                            isMegaOpen&&(
                                <div className={scss.mega_panel}>
                                    <div className={scss.mega_container}>
                                        {allCategories.map((category)=>(
                                            <div key={category.route} className={scss.mega_column}>
                                                <h4 onClick={()=>navigate(category.route)}>{category.title}
                                                </h4>
                                                {category.subCategory && category.subCategory.length>0 && (
                                                    <ul>
                                                        {category.subCategory.map((sub)=>(
                                                            <li key={sub.route} onClick={()=>navigate(sub.route)}>
                                                                {sub.title}
                                                            </li>
                                                            )
                                                        )}
                                                    </ul>

                                                )}

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
        </header>
    )
}

export default Header
