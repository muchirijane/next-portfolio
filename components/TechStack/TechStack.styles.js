import styled from 'styled-components';
export const TechContainer = styled.div`
	h2 {
		margin-top: 6rem;
		margin-bottom: 3rem;
	}
`;
export const TechContent = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-row-gap: 4rem;
`;
export const TechIconItem = styled.div`
	display: flex;
	align-items: center;
`;
export const TechIconImage = styled.div`
	background-color: ${({ theme }) => theme.secondaryColor};
	height: 5rem;
	width: 5rem;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 2rem;
	box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
`;
