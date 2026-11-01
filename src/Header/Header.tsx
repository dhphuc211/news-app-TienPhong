import scss from './Header.module.scss'
import { tabs } from './HeaderData.ts'

import { useNavigate, useLocation } from 'react-router-dom'




const Header = ()=>
{

    const navigate = useNavigate()
    const location = useLocation ()
                        
    console.log(location.pathname)

    return(
        <header className={scss.header}>
            <div className={scss.logo}>
                <div className={scss.img_container}>
                    <img src="../../public/assets/imgs/tienphong_logo.webp" alt="tienphong_logo" loading='lazy'/>
                </div>
                <div className={scss.header_title}>
                    <h1>Tiền Phong</h1>
                    <h2>cơ quan trung ương của đoàn tncs hồ chí minh</h2>
                </div>
            </div>
            <nav className={scss.pages}>
                <ul>
                    {
                        tabs.map((tab)=>(
                            <li className={location.pathname === tab.route ? scss.active : ''} key={tab.title} onClick={()=>{navigate(tab.route)}}>{tab.title}</li>
                        ))
                    }
                </ul>
            </nav>

            <nav className={scss.actions}>
                <ul>
                    <li><i className="fa-solid fa-magnifying-glass"></i></li>
                    <li><i className="fa-regular fa-circle-user"></i></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header
