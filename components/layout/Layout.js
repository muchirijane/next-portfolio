// import Prism from "Prismjs";
// import  "Prismjs";
import {useEffect} from 'react'

import Navbar from '../Navbar/Navbar'
import Footer from './Footer';


import GlobalStyles from './Layout.styles';
import {Container} from './Layout.styles';
  
export default function Layout({children}) {
   // useEffect(() => {
   //    Prism.highlightAll();
   //  }, []);
	return (
		<>
    <GlobalStyles/>
    

    <Navbar/>
    
    <Container>
       {children}
       <Footer/>
    </Container>
    
    
   
    
   </>
	);
}
