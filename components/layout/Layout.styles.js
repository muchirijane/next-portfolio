import styled, { createGlobalStyle } from 'styled-components'
import { device } from '../Theme/Theme'
const GlobalStyles = createGlobalStyle`

*,
*::before, 
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
:root{
  --colour-white: #fff;
  --dark-pink: #E861A4;
  --light-pink: #FF6F8D;
  --light-brown: #C68900;
  --lighter-pink:  rgba(232, 97, 164, 0.52);
  --pink-shadow:  0px 3px 10px rgba(232, 97, 164, 0.2);
  --big-shadow:  0px 8px 30px rgba(0, 0, 0, 0.1);
  --medium-shadow: 0px 5px 20px  rgba(0, 0, 0, 0.05);
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    
}

body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 1.3;
    font-size: 1.6rem; 
    height: 100vh;
}

::selection {
	background: var(--dark-pink);
}


h1, h2, h3, h4, h5{
  font-family: 'Montserrat', sans-serif;
}

.home-image {
	height: 500px;
  width: 600px;
  @media ${device.laptopS} {
		img {
			display: none;
		}
	}
}

button{
  border: none;
  padding: 1.6rem 3rem;
}
.center{
  display: inline-block;
  margin: 3rem auto;
}

.link-animated{
  
		display: inline-block;
		color: ${({ theme }) => theme.linkColor};
		text-decoration: none;

		&:hover {
			transition: all .3s cubic-bezier(.88, .17, .05, 1) ;
			color: var(--light-pink);
			text-decoration: none;
			transform: translateY(-2px);
		}

		&:active {
			transition: all .3s cubic-bezier(.88, .17, .05, 1) ;
			transform: translateY(3px);
		}
	
}

.link{
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
background: ${({ theme }) => theme.secondaryColor};
color: ${({ theme }) => theme.primary};
border-radius: .5rem;


&:hover{

  background: ${({ theme }) => theme.linkColor};
  color: var(--colour-white);
  transform: translateY(-2px);
  transition: all .3s cubic-bezier(.88, .17, .05, 1);
  

  span{
    color: var(--colour-white);
    margin-left: 1.4rem;
  }
}
&:active{
  transform: translateY(2px);
  transition: all .3s cubic-bezier(.88, .17, .05, 1);
}
}

.outline-link{
  text-decoration: none;
  cursor: pointer;
border: 1px solid ${({ theme }) => theme.secondaryColor};

color: ${({ theme }) => theme.secondaryColor};
background: none;
border-radius: .5rem;


&:hover{
  background: ${({ theme }) => theme.linkColor};
  color: var(--colour-white);
  border: none;
  
  transition: all .2s cubic-bezier(.84,.17,.06,1.24) ;

  span{
    color: var(--colour-white);
    margin-left: 1.4rem;
  }
}

 .menuOpen{
   display: block;
 }
 .menuClosed{
   display: none;
 }
}

footer{
  text-align: center;
  letter-spacing: 2px;
  z-index: 2000;
  font-size: clamp(1.5rem, 40%, 6rem);
  
  
  a{
    color: ${({ theme }) => theme.linkColor};
    text-decoration: none;
  }
}

`

export default GlobalStyles

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  z-index: 1000;
  margin: 0 20rem;
  margin-right: 10rem;
  scroll-behavior: smooth;

  overflow-x: clip;

  @media ${device.laptopL} {
    margin: 0 10rem;
    margin-right: 0;
  }
  @media ${device.tablet} {
    margin: 0 2rem;
  }
  @media ${device.mobileL} {
    margin: 0 1rem;
  }
  @media ${device.mobileM} {
    margin: 0 1.4rem;
  }
`
