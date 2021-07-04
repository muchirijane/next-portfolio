import styled from 'styled-components';

export const ContactContainer = styled.section`
	margin: 10rem 0;
	width: 88%;

	h2 {
		font-size: clamp(3rem, 50%, 10rem);
	}
	p {
		font-size: clamp(1.8rem, 30%, 6rem);
		&:not(:first-child) {
			margin-top: 3rem;
		}
	}
	button {
		font-size: clamp(1.6rem, 50%, 6rem);
	}
`;
export const DevLink = styled.a`margin-left: .6rem;`;
export const ContactContent = styled.div`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-column-gap: 12rem;
	grid-row-gap: 3rem;
`;
export const ContactSocials = styled.div`
	margin-top: 5rem;
	span {
		display: inline-block;
		margin-top: 2rem;
	}

	a {
		&:not(:first-child) {
			margin-left: 2rem;
		}
		&:hover {
			transform: scale(1.3) translateY(-3px);
		}

		svg {
			font-size: 2rem;
		}
	}
`;

export const ContactForm = styled.div`
	background-color: ${({ theme }) => theme.primary};
	box-shadow: var(--medium-shadow);
	padding: 3rem 5rem;

	input {
		height: 4rem;
		width: 100%;
		margin-bottom: 3rem;
		border: none;
		border-radius: 4px;
		padding: 0.5rem 1rem;
		font-size: 1.5rem;
	}
	textarea {
		border-radius: 4px;
		font-size: 1.6rem;
		padding: 0.5rem 1rem;
		margin-bottom: 3rem;
		width: 100%;

		&::placeholder {
			font-size: clamp(1.6rem, 40%, 7rem);
		}
	}
`;
