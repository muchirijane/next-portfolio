import styled from 'styled-components'
import { device } from '../Theme/Theme'
export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;

  button {
    margin-top: 4rem;
  }
  h3 {
    font-size: clamp(2rem, 60%, 8rem);
  }
`

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 4rem;
  grid-row-gap: 5rem;

  @media ${device.desktop} {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`

export const ProjectContent = styled.div`
  background-color: ${({ theme }) => theme.tertiaryColor};
  box-shadow: ${({ theme }) => theme.bigShadow};
  padding: 3rem 2.5rem;
  h3 {
    font-size: clamp(1.8rem 60% 7rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: clamp(1.5rem 60% 7rem);
    letter-spacing: 0.8px;
  }

  span {
    display: inline-block;
    font-weight: 300;
    font-size: clamp(1.4rem, 60%, 6rem);
    margin-top: 2rem;
  }
  @media ${device.mobileS} {
    padding: 3rem 2rem;
    width: 90%;
  }
`

export const ProjectLink = styled.div`
  margin-top: 3rem;
  display: flex;

  a:link,
  a:active {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 1rem;

    &:not(:last-child) {
      margin-right: 2rem;
    }

    svg {
      margin-right: 0.8rem;
    }
  }
`
