import styled from 'styled-components';

export const PortfolioContainer = styled.section`
	width: 90%;
	margin: 5rem auto;
`;
export const FeaturedPortfolios = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
	grid-gap: 6rem;
`;
export const PortfolioContent = styled.div`
	width: 45rem;
	min-height: 58rem;
	position: relative;
	img {
		background: var(--dark-pink);
	}
`;
export const PortfolioText = styled.div`
	background-color: ${({ theme }) => theme.tertiaryColor};
	color: ${({ theme }) => theme.darkerColor};
	/* min-height: 32rem; */
	clip-path: polygon(0 13%, 100% 0%, 100% 100%, 0% 100%);
	margin-top: -7rem;
	position: absolute;
	z-index: 100;
	padding: 7rem 3rem;

	img {
		z-index: 1;
	}
	h3 {
		font-size: clamp(2.2rem, 80%, 9rem);
		font-weight: 700;
		margin-bottom: 1.4rem;
	}
	p {
		margin-top: 1rem;
	}
`;
export const PortfolioStack = styled.span`
	background-color: var(--lighter-pink);
	box-shadow: var(--pink-shadow);
	border-radius: 3px;
	padding: .4rem .8rem;
	font-size: 1.2rem;
	font-weight: bold;
	display: inline-block;
	margin-right: 1rem;
	margin-bottom: 1rem;
`;

export const PortfolioLinkContainer = styled.div`margin-top: 3.4rem;`;

export const PortfolioLink = styled.a`
	display: inline-block;
	padding: .6rem 1.5rem;
	font-size: 1.4rem;

	svg {
		margin-right: .8rem;
	}

	&:not(:last-child) {
		margin-right: 2rem;
	}
`;
