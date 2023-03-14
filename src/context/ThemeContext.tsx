import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'

export type Theme = 'dark' | 'light'

interface ThemeProps {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = React.createContext<ThemeProps>({
  theme: 'light',
  setTheme: () => {},
})

export function useTheme() {
  return React.useContext(ThemeContext)
}

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getTheme())
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

const LOCAL_THEME = 'local_theme'

function getTheme(): Theme {
  if (
    localStorage[LOCAL_THEME] === 'dark' ||
    (!(LOCAL_THEME in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark'
  }
  return 'light'
}
