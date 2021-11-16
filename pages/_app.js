import { useState, useEffect } from 'react'
// import '../components/Theme/prism.css'
import '../components/Theme/prism-duotone-dark.css'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../components/Theme/Theme'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  )
}
