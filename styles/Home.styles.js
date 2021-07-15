import styled from 'styled-components';
import { device } from '../components/Theme/Theme';
export const HomeContainer = styled.section`
	margin: 10rem auto;
	width: 90%;
`;
export const HomeContent = styled.div`
	height: 60vh;
	width: 100%;
	margin-top: 8rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
	grid-column-gap: 13rem;
	grid-row-gap: 4rem;

	h3 {
		font-size: clamp(2rem, 70%, 6rem);
		font-weight: 300;
	}
	h2 {
		font-size: clamp(4rem, 90%, 9rem);
	}
	h1 {
		font-size: clamp(4rem, 90%, 9rem);
		font-weight: 300;
		@media ${device.laptopM} {
			font-size: clamp(3rem, 80%, 9rem);
		}
	}
	p {
		font-size: clamp(2rem, 80%, 9rem);
		letter-spacing: 1.6px;
		@media ${device.laptopM} {
			font-size: clamp(1.8rem, 80%, 9rem);
		}
	}

	@media ${device.tablet} {
		margin-top: 0rem;
	}
`;
export const HomeText = styled.div`margin-top: 3rem;`;
export const Span = styled.span`color: ${({ theme }) => theme.linkColor};`;

export const PageLink = styled.a`
	font-family: 'Roboto', sans-serif;
	font-size: 2rem;
	font-weight: 700;
	padding: 1.2rem 4rem;
	display: inline-block;
	margin-top: 6rem;
	span {
		display: inline-block;
		font-size: inherit;
		padding-left: .8rem;
		color: ${({ theme }) => theme.primary};
	}
`;

export const AboutContainer = styled.section`
	margin-top: 16rem;
	width: 90%;
	h2 {
		font-size: clamp(4rem, 90%, 9rem);
		font-family: 'Montserrat', sans-serif;
	}

	p {
		font-size: clamp(2rem, 80%, 9rem);
	}
	@media ${device.laptopS} {
		margin: 6rem auto;
		width: 100%;
	}
`;
export const AboutLink = styled.a`
	font-size: 1.8rem;
	display: inline-block;
	padding: 1rem 3rem;
	margin-top: 4rem;
	text-align: center;
`;

export const ImgWrapper = styled.div`
	width: 50rem;
	@media ${device.laptopS} {
		z-index: -1;
		opacity: 0.06;
	}
`;
