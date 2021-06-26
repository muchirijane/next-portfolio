import Meta from './Meta';
import Navbar from '../Navbar/Navbar'
import Footer from './Footer';


import GlobalStyles from './Layout.styles';
import {Container} from './Layout.styles';
export default function Layout({children}) {
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
