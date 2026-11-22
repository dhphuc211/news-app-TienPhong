import scss from './Header.module.scss'

import { useNavigate, useLocation, Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'
import { useState } from 'react'




const Header = ()=>
{

    const navigate = useNavigate()
    const location = useLocation ()
    const [searchValue, setSearchValue] = useState<string>("")
                        
    const today = new Date();
    const formattedDate = today.toLocaleDateString('vi-VN',
    {
        weekday: 'long' ,day: '2-digit', month: '2-digit', year: 'numeric'
    });
    const navCategories = [
        'Mới nhất', 
        'Xã hội', 
        'Kinh tế', 
        'Sóng xanh', 
        'Địa ốc',
        'Sức khỏe', 
        'Thế giới', 
        'Giới trẻ', 
        'Pháp luật', 
        'Thể thao',
        'Người lính', 
        'Xe', 
        'Văn hóa', 
        'Giải trí', 
        'Giáo dục',
        'Khoa học', 
        'Hoa hậu', 
        'Video'
    ];


    const searchNews = ()=>
    {
        navigate(`/search-news/${searchValue.toLowerCase().trim()}`)
        setSearchValue('')
    }


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
                                <Link to={'/'} className={scss.list}>Tiền Phong Nhật báo</Link>
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

                                    navCategories.map((category, index) => 
                                    {
                                        const route = category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')
                                        
                                        return (
                                            <li key={index} className={`${scss.text} ${location.pathname === ('/'+route) ? scss.active : ''}`} title={category} onClick={()=>{navigate(`/${route}`)}}>{category}</li>
                                        )
                                    })

                                }
                            </ul>
                            <div className={scss.mega_menu} title={'Xem thêm'}>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default Header
