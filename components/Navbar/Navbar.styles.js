import styled from 'styled-components'
import { device } from '../Theme/Theme'
export const Header = styled.header`
  position: fixed;
  left: 0;
  height: 100vh;
  z-index: 4000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: ${({ theme }) => theme.navbarShadow};

  @media ${device.tabletS} {
    display: block;
  }

  nav {
    @media ${device.tabletS} {
      position: absolute;
      top: -60px;
      width: 100%;
      background-color: ${({ theme }) => theme.primary};
    }
    @media ${device.mobileL} {
      top: -100px;
    }
    @media ${device.mobileS} {
      top: -150px;
    }
  }

  ul {
    display: flex;
    flex-direction: column-reverse;
  }
  @media ${device.tablet} {
    height: 9rem;
    width: 100%;
    bottom: 0;
    flex-direction: row;

    ul {
      flex-direction: row;

      @media ${device.mobileL} {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-gap: 1rem;
        padding: 0 2rem;
      }
    }
  }
`

export const NavItems = styled.li`
  list-style: none;
  padding: 3rem 2rem;

  @media ${device.laptopL} {
    padding: 2rem 1rem;
  }
  @media ${device.tablet} {
    padding: 2rem;
    margin-left: 0;
  }
  @media ${device.mobileL} {
    padding: 1rem;
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-size: clamp(1.6rem, 50%, 10rem);
    text-decoration: none;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.secondaryTextColor};
    writing-mode: vertical-rl;
    transform: rotate(180deg);

    &:hover {
      color: ${({ theme }) => theme.linkColor};
      transition: all 0.2s ease;
    }
    @media ${device.laptopL} {
      font-size: clamp(1.5rem, 50%, 10rem);
    }
    @media ${device.tablet} {
      writing-mode: initial;
    }
  }
`
export const MenuWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const MenuButton = styled.button`
  height: 8rem;
  width: 8rem;
  cursor: pointer;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;

  @media ${device.tabletS} {
    display: flex;
  }
`

export const MenuBugger = styled.div`
  background: ${({ isOpen }) =>
    isOpen ? 'transparent' : `${({ theme }) => theme.secondaryColor}`};
  height: 0.4rem;
  width: 4rem;
  border-radius: 0.5rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.97, 0, 0.11, 1);

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.secondaryColor};
    height: 0.4rem;
    width: 4rem;
    border-radius: 0.5rem;
    left: 0;
    transition: all 0.3s cubic-bezier(0.97, 0, 0.11, 1);
  }
  &::before {
    transform: ${({ isOpen }) =>
      isOpen ? 'translate(5px, -5px) rotate(45deg)' : 'translateY(-1.4rem)'};
  }
  &::after {
    transform: ${({ isOpen }) =>
      isOpen ? 'translate(5px, -3px) rotate(-45deg)' : 'translateY(1.4rem)'};
  }
`
