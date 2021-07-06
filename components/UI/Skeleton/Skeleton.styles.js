import styled from 'styled-components';

export const SkeletonContainer = styled.section`
	margin: 6rem auto;
	width: 60rem;
	div {
		background: ${({ theme }) => theme.codeBg};
		box-shadow: ${({ theme }) => theme.smallShadow};
		margin-bottom: 4rem;
		border-radius: 5px;
	}
`;
export const Image = styled.div`
	height: 20rem;

	background: ${({ theme }) => theme.codeBg};
	box-shadow: ${({ theme }) => theme.mediumShadow};
`;
export const Title = styled.div`height: 5rem;`;
export const TagWrapper = styled.span`
	background: none;
	display: inline-block;
	margin-bottom: 3rem;
	span {
		display: inline-block;
		box-shadow: ${({ theme }) => theme.smallShadow};
		background: ${({ theme }) => theme.codeBg};
		height: 3rem;
		width: 5rem;
		border-radius: 1px;
		&:not(:last-child) {
			margin-right: 4rem;
		}
	}
`;
export const SubTitle = styled.div`height: 3rem;`;
export const Text = styled.div`height: 3rem;`;
