import styled from 'styled-components'
import { device } from '../components/Theme/Theme'
export const HomeContainer = styled.section`
  margin: 7rem auto;
  width: 90%;
  @media ${device.tabletS} {
    margin: 3rem auto;
  }
`
export const HomeContent = styled.div`
  width: 100%;
  margin-top: 8rem;

  h3 {
    font-size: clamp(2rem, 70%, 6rem);
    font-weight: 300;
  }
  h2 {
    font-size: clamp(6rem, 90%, 9rem);
    @media ${device.mobileL} {
      font-size: clamp(3rem, 90%, 9rem);
    }
  }
  h1 {
    font-size: clamp(8rem, 90%, 9rem);
    font-weight: 300;
    color: ${(props) => props.theme.grey};
    @media ${device.laptopM} {
      font-size: clamp(3rem, 80%, 9rem);
    }
    @media ${device.mobileM} {
      font-size: clamp(2.4rem, 80%, 9rem);
    }
  }
  p {
    font-size: clamp(2rem, 80%, 9rem);
    letter-spacing: 1.8px;
    margin-top: 2rem;
    @media ${device.Mlaptop} {
      width: 60%;
    }
    @media ${device.tabletS} {
      margin: 2rem auto;
    }
  }

  @media ${device.laptopM} {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }
  @media ${device.laptopS} {
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    margin-top: 0rem;
  }
`
export const HomeText = styled.div`
  margin-top: 3rem;
`
export const Span = styled.span`
  color: ${({ theme }) => theme.linkColor};
`

export const PageLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  padding: 1.2rem 4rem;
  display: inline-block;
  margin-top: 6rem;
  span {
    display: inline-block;
    font-size: inherit;
    padding-left: 0.8rem;
    color: ${({ theme }) => theme.primary};
  }
  @media ${device.laptopS} {
    margin-top: 4.4rem;
  }
  @media ${device.mobileS} {
    margin-top: 3rem;
    padding: 1rem 4rem;
  }
`

export const AboutContainer = styled.section`
  margin-top: 16rem;
  width: 90%;
  h2 {
    font-size: clamp(4rem, 90%, 9rem);
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-size: clamp(2rem, 80%, 9rem);
    padding-top: 0.3rem;
  }
  @media ${device.laptopS} {
    margin: 6rem auto;
    width: 100%;
  }
  @media ${device.tabletS} {
    margin: 12rem auto;
    width: 100%;
  }
`
export const AboutLink = styled.a`
  font-size: 1.8rem;
  display: inline-block;
  padding: 1rem 3rem;
  margin-top: 4rem;
  text-align: center;
`
