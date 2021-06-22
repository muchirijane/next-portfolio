import styled from 'styled-components';

export const HomeContainer = styled.section`
	position: relative;
	margin: auto;
	width: 80%;
`;
export const HomeContent = styled.div`
	position: absolute;
	top: 16%;
	left: 5%;
	z-index: 10;

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
		margin-bottom: 6rem;
		width: 77%;
		letter-spacing: 2px;
	}
	span {
		color: #ff85ad;
	}
`;

export const PageLink = styled.a`
	font-family: 'Roboto', sans-serif;
	font-size: 2rem;
	font-weight: 700;
	padding: 1.5rem 4rem;
	span {
		display: inline-block;
		font-size: inherit;
		margin-left: .8rem;
		color: ${({ theme }) => theme.primary};
	}
`;
