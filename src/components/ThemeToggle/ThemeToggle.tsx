import { useTheme } from '../../hooks/useTheme'
import style from './ThemeToggle.module.scss'

const ThemeToggle = () =>
{
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <button
            type="button"
            className={style.toggle}
            title={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
            onClick={toggleTheme}
        >
            <i className={isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
        </button>
    )
}

export default ThemeToggle
