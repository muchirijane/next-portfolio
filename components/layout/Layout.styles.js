import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Roboto:wght@700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
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
    // @media only screen and (min-width: 1900px){
    //     font-size: 90%;
    // }
    // @media only screen and (min-width: 2000px){
    //     font-size: 100%;
    // }
}
:root{
  $bg-colour: "#F5F5F5";
  $text-colour: "#444444"
}
body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem; 
    height: 100vh;
}

.button{
padding: 2rem 3rem;
background: #fff;
color: #000;
}

footer{
  text-align: center;
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
