import styled from 'styled-components';

export const PostContainer = styled.section`
	width: 65rem;
	margin: 3rem auto;
	margin-bottom: 15rem;
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
	a {
		display: inline-block;
		color: ${({ theme }) => theme.linkColor};
		text-decoration: underline;

		&:hover {
			transition: all .3s cubic-bezier(.88, .17, .05, 1);
			color: var(--light-pink);
			text-decoration: none;
			transform: translateY(-2px);
		}

		&:active {
			transition: all .3s cubic-bezier(.88, .17, .05, 1);
			transform: translateY(3px);
		}
	}

	pre {
		background-color: ${({ theme }) => theme.codeBg};
		box-shadow: var(--medium-shadow);
		padding: 16px;
		border-radius: 4px;
		overflow: auto;
		font-size: 14px;
		margin-bottom: 4.1rem;
		margin-top: 3rem;
		padding: 3rem 0 1.8rem .4rem;
		border-radius: 12px;
		overflow-x: auto;

		&::-webkit-scrollbar:horizontal {
			height: 1rem;
		}

		::-webkit-scrollbar-thumb:horizontal {
			background-color: green;
			border-radius: 4px;
		}
	}

	&::-webkit-scrollbar-thumb:horizontal {
		background-color: green;
		border-radius: 4px;
	}
`;

export const PostTags = styled.div`
	margin-bottom: 8rem;
	span {
		background-color: ${({ theme }) => theme.linkColor};
		color: var(--colour-white);
		padding: .5rem;
		border-radius: .4rem;
		&:not(:last-child) {
			margin-right: 2rem;
		}
	}
`;
