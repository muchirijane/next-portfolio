import styled from 'styled-components'
import { device } from '../components/Theme/Theme'
export const PortfolioContainer = styled.section`
  width: 98%;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: clamp(4rem, 50%, 10rem);
    margin-bottom: 3rem;
  }
  button {
    margin-top: 6rem;
  }
`
export const FeaturedPortfolios = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45rem, 1fr));
  grid-gap: 5rem;
  @media ${device.laptopL} {
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  }
  @media ${device.laptopS} {
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  }
`
export const PortfolioContent = styled.div`
  width: 46rem;
  min-height: 58rem;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.bigShadow};

  @media ${device.laptopL} {
    width: 40rem;
  }
  @media ${device.laptopL} {
    width: 35rem;
  }
  @media screen and (max-width: 890px) and (min-width: 650px) {
    width: 56rem;
  }

  @media ${device.mobileM} {
    width: 30rem;
  }
  @media ${device.mobileS} {
    width: 26rem;
  }
  @media ${device.Mlaptop} {
    width: 50rem;
  }
  @media ${device.desktop} {
    width: 60rem;
  }
`
export const PortfolioImage = styled.div`
  background: rgba(0, 0, 0, 0.3);
  img {
    background: var(--colour-white);
  }
`
export const PortfolioText = styled.div`
  background-color: ${({ theme }) => theme.tertiaryColor};
  color: ${({ theme }) => theme.darkerColor};

  margin-top: -7rem;

  padding: 10rem 3rem 2rem 3rem;
  @media ${device.mobileS} {
    padding: 12rem 2rem 2rem;
  }

  h3 {
    font-size: clamp(2.2rem, 80%, 9rem);
    font-weight: 700;
    margin-bottom: 1.4rem;
  }
  p {
    margin-top: 1rem;
    font-size: clamp(1.7rem, 80%, 9rem);
    letter-spacing: 1px;
  }
`
export const PortfolioStack = styled.span`
  background-color: var(--lighter-pink);
  box-shadow: var(--pink-shadow);
  border-radius: 3px;
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
`

export const PortfolioLinkContainer = styled.div`
  margin-top: 3.4rem;
  display: flex;
`

export const PortfolioLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.5rem;
  font-size: 1.4rem;

  svg {
    margin-right: 0.8rem;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
  @media ${device.mobileS} {
    margin-bottom: 2rem;
  }
`
