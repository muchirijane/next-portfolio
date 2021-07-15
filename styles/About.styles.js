import styled from 'styled-components';

export const AboutSection = styled.section`
	margin: 10rem auto;
	width: 80%;
	z-index: 3000;
	h1 {
		font-size: clamp(4rem, 50%, 10rem);
		font-family: 'Montserrat', sans-serif;
	}
`;
export const AboutContent = styled.div`
	margin-top: 2rem;
	p {
		font-size: clamp(2rem, 60%, 8rem);
		padding-top: 2rem;
	}
	a {
		cursor: pointer;
		text-decoration: none;
		color: ${({ theme }) => theme.linkColor};

		&:hover {
			text-decoration: underline;
		}
	}
`;
