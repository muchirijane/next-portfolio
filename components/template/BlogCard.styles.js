import styled from 'styled-components';

export const BlogContent = styled.div`
	cursor: pointer;
	width: 36rem;
	transition: all .2s cubic-bezier(.88, .17, .05, 1);

	&:hover {
		transition: all .2s cubic-bezier(.88, .17, .05, 1);
		box-shadow: var(--medium-shadow);

		h3 {
			text-decoration: underline;
		}
		span {
			color: var(--dark-pink);
		}
		img {
			transition: all .2s cubic-bezier(.88, .17, .05, 1);
			transform: scale(1.1);
		}
	}
`;

export const BlogItems = styled.div`
	padding: 2rem;
	h3 {
		font-size: clamp(2rem, 60%, 8rem);
		margin-bottom: 1rem;
	}
	p {
		font-size: clamp(1.6rem, 50%, 8rem);
	}
	span {
		&:not(:last-child) {
			padding-right: 2rem;
		}
	}
`;

export const BlogTagWrapper = styled.div`
	margin-top: 2rem;
	span {
		&:not(:last-child) {
			padding-right: 2rem;
		}
	}
`;
