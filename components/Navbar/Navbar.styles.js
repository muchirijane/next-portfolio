import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	left: 0;
	height: 100vh;
	z-index: 2000;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: ${({ theme }) => theme.navbarShadow};
	ul {
		display: flex;
		flex-direction: column-reverse;
	}
`;

export const NavItems = styled.li`
	list-style: none;
	padding: 3rem 2rem;
	a {
		font-family: 'Roboto', sans-serif;
		text-decoration: none;
		letter-spacing: 3px;
		color: ${({ theme }) => theme.secondaryTextColor};
		writing-mode: vertical-rl;
		transform: rotate(180deg);
	}
`;
