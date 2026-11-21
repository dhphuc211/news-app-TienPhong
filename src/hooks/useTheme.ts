import { useLayoutEffect, useState } from 'react'

const getInitialTheme = (): string =>
{
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light')
    {
        return saved
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const useTheme = () =>
{
    const [theme, setTheme] = useState<string>(getInitialTheme)

    useLayoutEffect(() =>
    {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () =>
    {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return { theme, toggleTheme }
}
