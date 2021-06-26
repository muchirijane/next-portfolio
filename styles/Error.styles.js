import styled from 'styled-components';

export const ErrorContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 8rem;
	img {
		width: 70%;
		margin-top: 2rem;
		margin-left: -14rem;
		margin-right: 0;
	}
`;

export const ErrorContent = styled.div`width: 100%;`;
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
