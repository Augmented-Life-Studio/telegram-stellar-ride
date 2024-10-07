import { dark } from '@/uikit'
import React, { useState } from 'react'
import { DefaultTheme, ThemeProvider as ProjectTheme } from 'styled-components'

const CACHE_KEY = 'IS_DARK'

export interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType>({ isDark: false, toggleTheme: () => null })

/**
 * This component provides the Theme context for the Telegram mini-app.
 * It handles the following functionalities:
 * - Retrieves the user's theme preference from local storage.
 * - Toggles between dark and light themes.
 * - Persists the user's theme preference in local storage.
 *
 * @component
 * @param {React.ReactNode} props.children - The child components to be wrapped by the ThemeContextProvider.
 * @returns {JSX.Element} The rendered ThemeContextProvider component.
 *
 * @example
 * <ThemeContextProvider>
 *   <App />
 * </ThemeContextProvider>
 *
 * @remarks
 * This component uses the following hooks and context providers:
 * - `useState` for managing the theme state.
 * - `ThemeContext.Provider` for providing the theme context to child components.
 * - `ProjectTheme` for applying the theme to the child components.
 */
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = typeof window !== 'undefined' ? localStorage.getItem(CACHE_KEY) : null
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = () => {
    setIsDark((prevState: any) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ProjectTheme theme={dark as DefaultTheme}>{children}</ProjectTheme>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
