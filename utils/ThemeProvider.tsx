import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
    theme: 'dark',
    toggleTheme: () => {}
})

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        const stored = localStorage.getItem('theme') as Theme | null
        const initial = stored === 'light' || stored === 'dark' ? stored : 'light'
        setTheme(initial)
        document.documentElement.setAttribute('data-theme', initial)
    }, [])

    const toggleTheme = () => {
        setTheme((prev) => {
            const next: Theme = prev === 'dark' ? 'light' : 'dark'
            document.documentElement.setAttribute('data-theme', next)
            try {
                localStorage.setItem('theme', next)
            } catch (e) {
                console.error(e)
            }
            return next
        })
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextValue => useContext(ThemeContext)
