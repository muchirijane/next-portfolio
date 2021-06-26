import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,
*::before, 
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
:root{
  --color-white: #fff;
  --dark-pink: #E861A4;
  --light-pink: #FF6F8D;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    // @media only screen and (max-width: 1200px){
    //     font-size: 58%;
    // }
    // @media only screen and (max-width: 1100px){
    //     font-size: 55%;
    // }
     
    // @media only screen and (min-width: 2000px){
    //     font-size: 100%;
    // }
}

body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem; 
    height: 100vh;
}

h1, h2, h3, h4, h5{
  font-family: 'Montserrat', sans-serif;
}

.backgroundImage {
	height: auto;
  width: 100%;
	z-index: -1;
	filter: ${({ theme }) => theme.filterBg}
}

.link{
  text-decoration: none;
  cursor: pointer;
background: ${({ theme }) => theme.secondaryColor};
color: ${({ theme }) => theme.primary};


&:hover{
  background: var(--dark-pink);
  color: var(--colour-white);
  
  transition: all .3s ease-in ;

  span{
    color: var(--colour-white);
    margin-left: 1.4rem;
  }
}
}

footer{
  text-align: center;
  letter-spacing: 2px;
  z-index: 2000;
  a{
    color: var(--light-pink);
    text-decoration: none;
  }
}

`;

export default GlobalStyles;

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	z-index: 1000;
	margin: 0 15rem;
`;
