import styled from 'styled-components';

export const ErrorContainer = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 8rem;
	img {
		margin-top: 2rem;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ErrorContent = styled.div`
	width: 80%;
	margin-left: 6rem;
`;
export const ErrorText = styled.div`
	margin: 3rem 0;
	h1 {
		font-size: clamp(4rem, 90%, 9rem);
		font-weight: 300;
		color: var(--dark-pink);
	}
	p {
		font-size: clamp(2.4rem, 80%, 9rem);
		letter-spacing: 2px;
	}
`;
export const PageLink = styled.a`
	padding: 1.2rem 3rem;
	span {
		padding-left: .5rem;
	}
`;
