import styled from 'styled-components';

export const Container = styled.section`
	margin: 4rem auto;
	width: 60%;
	text-align: center;
	position: relative;
	z-index: 2000;
`;

export const Content = styled.div`
	h1 {
		font-size: clamp(4rem, 60%, 9rem);
		margin-bottom: 2rem;
	}

	p {
		font-size: clamp(2.2rem, 30%, 8rem);
		margin-bottom: 3rem;

		@media (max-width: 768px) {
			font-size: clamp(2rem, 30%, 8rem);
		}
	}
`;

export const BlogLink = styled.a`padding: 0 1rem;`;

export const PageLink = styled.a`
	display: inline-block;
	padding: 1.4rem 3rem;
`;
