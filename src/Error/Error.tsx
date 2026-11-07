import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import scss from './Error.module.scss'

const Error = ()=>
{
    return (
        <>
        <Header/>
            <main className={scss.main}>
                <h1>404</h1>     
                <h2>Trang không tồn tại</h2>     
                <p>Rất tiếc, trang bạn đang tìm kiếm không tồn tại, 
                    đã bị xóa hoặc đường dẫn bị sai. Quay trở về trang trước đó hoặc trở về <Link to={'/'}>trang chủ</Link></p>      
            </main>
        <Footer/>
        </>
    )
}

export default Error