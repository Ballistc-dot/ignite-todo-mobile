import { ReactNode } from 'react'
import { defaultTheme } from '../styles/themes/default'
import { ThemeProvider } from 'styled-components/native'

interface ITheme {
  children: ReactNode
}

export function Theme({ children }: ITheme) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
