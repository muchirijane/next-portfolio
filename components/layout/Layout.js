import Prism from "Prismjs";
import {useEffect} from 'react'
import Meta from './Meta';
import Navbar from '../Navbar/Navbar'
import Footer from './Footer';


import GlobalStyles from './Layout.styles';
import {Container} from './Layout.styles';
  
export default function Layout({children}) {
   useEffect(() => {
      Prism.highlightAll();
    }, []);
	return (
		<>
    <GlobalStyles/>
    

    <Meta/>
    <Navbar/>
    
    <Container>
       {children}
       <Footer/>
    </Container>
    
    
   
    
   </>
	);
}
