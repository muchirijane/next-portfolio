import styled from 'styled-components';
import { device } from '../Theme/Theme';
export const Header = styled.header`
	position: fixed;
	left: 0;
	height: 100vh;
	z-index: 4000;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: ${({ theme }) => theme.navbarShadow};
	ul {
		display: flex;
		flex-direction: column-reverse;
	}
	@media ${device.tablet} {
		height: 9rem;
		width: 100vw;
		bottom: 0;
		flex-direction: row;

		ul {
			flex-direction: row;
		}
	}
`;

export const NavItems = styled.li`
	list-style: none;
	padding: 3rem 2rem;

	@media ${device.laptopL} {
		padding: 2rem 1rem;
	}
	@media ${device.tablet} {
		padding: 2rem;
	}

	a {
		font-family: 'Roboto', sans-serif;
		font-size: clamp(1.6rem, 50%, 10rem);
		text-decoration: none;
		letter-spacing: 3px;
		color: ${({ theme }) => theme.secondaryTextColor};
		writing-mode: vertical-rl;
		transform: rotate(180deg);

		&:hover {
			color: ${({ theme }) => theme.linkColor};
			transition: all .2s ease;
		}
		@media ${device.laptopL} {
			font-size: clamp(1.5rem, 50%, 10rem);
		}
		@media ${device.tablet} {
			writing-mode: initial;
		}
	}
`;
