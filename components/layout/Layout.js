// import prism from 'prismjs'
// import  "Prismjs";
import { useEffect } from 'react'

import Navbar from '../Navbar/Navbar'
import Footer from './Footer'

import Meta from './Meta'
import GlobalStyles from './Layout.styles'
import { Container } from './Layout.styles'

export default function Layout({ children }) {
  //   useEffect(() => {
  //     prism.highlightAll()
  //   }, [])
  return (
    <>
      <GlobalStyles />

      <Meta />
      <Navbar />

      <Container>
        {children}
        <Footer />
      </Container>
    </>
  )
}
