import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import BackToTop from '../components/BackToTop/BackToTop'

const MainContent = ()=>
{
    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
            <BackToTop/>
        </>
    )
}

export default MainContent