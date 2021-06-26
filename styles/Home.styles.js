import styled from 'styled-components';

export const HomeContainer = styled.section`
	margin: 10rem auto;
	width: 90%;
`;
export const HomeContent = styled.div`
	margin-top: 8rem;

	h3 {
		font-size: clamp(2rem, 70%, 6rem);
		font-weight: 300;
	}
	h2 {
		font-size: clamp(6rem, 90%, 9rem);
		font-family: 'Montserrat', sans-serif;
	}
	h1 {
		font-size: clamp(4rem, 90%, 9rem);
		font-family: 'Nunito', sans-serif;
		font-weight: 300;
	}
	p {
		font-size: clamp(2.4rem, 80%, 9rem);

		width: 77%;
		letter-spacing: 2px;
	}
`;
export const Span = styled.span`color: #ff85ad;`;

export const PageLink = styled.a`
	font-family: 'Roboto', sans-serif;
	font-size: 2rem;
	font-weight: 700;
	padding: 1.5rem 4rem;
	display: inline-block;
	margin-top: 6rem;
	span {
		display: inline-block;
		font-size: inherit;
		margin-left: .8rem;
		color: ${({ theme }) => theme.primary};
	}
`;

export const AboutContainer = styled.section`
	margin-top: 16rem;
	width: 90%;
	h2 {
		font-size: clamp(6rem, 90%, 9rem);
		font-family: 'Montserrat', sans-serif;
	}

	p {
		font-size: clamp(2.2rem, 80%, 9rem);

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
