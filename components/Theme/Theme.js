import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
	body: '#F5F5F5',
	text: '#444',
	toggleBorder: '#FFF',
	background: '#363537',
	filterBg: 'none',
	scollarBg: '#C4C4C4',
	scollarBgHover: '#BDBCBC',
	scollarTrack: '#E6E6E6',
	backgroundTitle: '#F1F1F1',
	primary: '#F5F5F5',
	secondaryColor: '#000',
	secondaryTextColor: '#000',
	navbarShadow: '0px 20px 30px rgba(0, 0, 0, 0.2);'
};

export const darkTheme = {
	body: '#161616',
	text: '#FAFAFA',
	toggleBorder: '#6B8096',
	background: '#999',
	filterBg: 'brightness(0.109)',
	scollarBg: '#333',
	scollarBgHover: '#444',
	scollarTrack: '#858484',
	primary: '#1D1D1D',
	secondaryColor: '#FEFEFE',
	secondaryTextColor: '#FEFEFE',
	navbarShadow: ' 0px 10px 40px rgba(0, 0, 0, 0.4)'
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
.backgroundColour {
	background-color: ${({ theme }) => theme.primary}
}
::-webkit-scrollbar{
    width: 12px;
}
::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.scollarBg};
    height: 3rem;
    border-radius: 10px;
    margin-right: 2px;
    :hover{
        background-color: ${({ theme }) => theme.scollarBgHover};
    }
}
::-webkit-scrollbar-track{
    border: 1px solid ${({ theme }) => theme.scollarTrack};
    background: ${({ theme }) => theme.scollarTrack};
    box-shadow: inset 0 0 2px 2px rgba(0,0,0, .05);
}
`;