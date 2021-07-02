import styled from 'styled-components';

export const PostContainer = styled.section`
	width: 65rem;
	margin: 3rem auto;
	line-height: 1.8;
	letter-spacing: 1.2px;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 3rem 0 2rem 0;
	}

	h1 {
		font-size: clamp(3rem, 80%, 9rem);
	}
	p {
		font-size: clamp(1.8rem, 60%, 7rem);
	}

	img {
		width: 65rem;
	}
`;

export const PostText = styled.div`width: 70rem;`;
