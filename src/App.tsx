
import { RouterProvider } from "react-router-dom"
import { router } from "./routers/Routers"
import { useEffect, useState } from "react"



const App = ()=>
{

    const [isVisible, setIsVisible] = useState<boolean>(false)

    const scrollToTop = ()=>
    {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=>
    {

        const toggleVisible = ()=>
        {
            if(window.scrollY > 350)
            {
                setIsVisible(true)
            }else setIsVisible(false)
        }

        window.addEventListener('scroll', toggleVisible, {passive: true})

        return ()=> window.removeEventListener('scroll', toggleVisible)
    }, [])



    return (
        <>
            <RouterProvider router={router}/>
            <div className="scoll-to-top-btn"
                style={{
                    display: isVisible ? 'flex' : 'none',
                    position: "fixed",
                    right: "2rem",
                    bottom: "2rem",
                    borderRadius: '9999px',
                    background: '#B30000',
                    width: '40px',
                    height: '40px',
                    padding: '12px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fafafa',
                    cursor: 'pointer'
                }}  
                onClick={scrollToTop}
            >
                <i className="fa-solid fa-arrow-up-long"></i>
            </div>
        </>
    )
}

export default App





