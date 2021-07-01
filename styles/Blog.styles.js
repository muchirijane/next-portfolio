import styled from 'styled-components';

export const BlogWrapper = styled.section`
	width: 80%;
	margin: 5rem auto;

	h1 {
		margin-bottom: 4rem;
	}
`;

export const BlogContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(322px, 1fr));
	grid-column-gap: 5rem;
	grid-row-gap: 2rem;
`;
