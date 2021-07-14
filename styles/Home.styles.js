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
	grid-column-gap: 3rem;
	grid-row-gap: 4rem;

	/* @media ${device.desktop} {
		grid-template-columns: repeat(auto-fill, minmax(60rem, 1fr));
	} */
@media  ${device.desktop}{
grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
}

	h3 {
		font-size: clamp(2rem, 70%, 6rem);
		font-weight: 300;
	}
	h2 {
		font-size: clamp(4rem, 90%, 9rem);
	}
	h1 {
		font-size: clamp(4rem, 90%, 9rem);
		/* font-family: 'Nunito', sans-serif; */
		font-weight: 300;
	}
	p {
		font-size: clamp(2rem, 80%, 9rem);
		letter-spacing: 2px;
	}
`;
export const HomeText = styled.div`margin-top: 3rem;`;
export const Span = styled.span`color: #ff85ad;`;

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

		/* width: 77%;
		letter-spacing: 2px; */
	}
`;
export const AboutLink = styled.a`
	font-size: 1.8rem;
	display: inline-block;
	padding: 1rem 3rem;
	margin-top: 4rem;
	text-align: center;
`;
