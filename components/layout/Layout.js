import Meta from './Meta';
import Navbar from '../Navbar/Navbar'
import Footer from './Footer';
import Image from 'next/image'
import backgroundImg from '../../public/background-pattern.svg'
import GlobalStyles from './Layout.styles';
import {Container} from './Layout.styles';
export default function Layout({children}) {
	return (
		<>
    <GlobalStyles/>
    
    <Image className="backgroundImage" src={backgroundImg} layout={'fill'} objectFit={'cover'} alt='background pattern' />
    <Meta/>
    <Navbar/>
    
    <Container>
       {children}
       <Footer/>
    </Container>
    
    
   
    
   </>
	);
}
