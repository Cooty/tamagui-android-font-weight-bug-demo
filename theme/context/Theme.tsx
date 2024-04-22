import appTheme from '../../tamagui.config'
import {TamaguiProvider} from 'tamagui'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react'
import {ThemeName} from 'theme/templates/types'
import {StatusBar, StatusBarStyle} from 'expo-status-bar'

type ThemeContextType = {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}
const ThemeContext = createContext({} as ThemeContextType)

export function useThemeManager() {
  return useContext(ThemeContext)
}

export function ThemeManager(props: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeName>('light')

  const statusBatStyle: StatusBarStyle = useMemo(() => {
    return theme === 'light' ? 'dark' : 'light'
  }, [theme])

  return (
    <>
      <StatusBar style={statusBatStyle} key={theme} />
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <TamaguiProvider config={appTheme} defaultTheme={theme}>
          {props.children}
        </TamaguiProvider>
      </ThemeContext.Provider>
    </>
  )
}
