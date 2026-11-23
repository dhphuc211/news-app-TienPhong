import { useEffect, useState } from 'react'
import style from './BackToTop.module.scss'

const SHOW_AFTER = 300

const BackToTop = () =>
{
    const [visible, setVisible] = useState(false)

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setVisible(window.scrollY > SHOW_AFTER)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!visible)
    {
        return null
    }

    return (
        <button
            type="button"
            className={style.back_to_top}
            title="Về đầu trang"
            onClick={() => window.scrollTo(0, 0)}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    )
}

export default BackToTop
