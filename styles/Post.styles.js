import styled from 'styled-components'
import { device } from '../components/Theme/Theme'
export const PostContainer = styled.section`
  width: 65rem;
  margin: 3rem auto;
  margin-bottom: 15rem;
  line-height: 1.8;
  letter-spacing: 1.2px;
  overflow-wrap: break-word;

  @media ${device.tablet} {
    width: 50rem;
  }
  @media ${device.mobileL} {
    width: 36rem;
  }
  @media ${device.mobileM} {
    width: 33rem;
  }
  @media ${device.mobileS} {
    width: 25rem;
  }

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
    border-radius: 5px;
    width: 65rem;
    @media ${device.tablet} {
      width: 50rem;
    }
    @media ${device.mobileL} {
      width: 37rem;
    }
    @media ${device.mobileM} {
      width: 34rem;
    }
    @media ${device.mobileS} {
      width: 25rem;
    }
  }
  a {
    display: inline-block;
    color: ${({ theme }) => theme.linkColor};
    text-decoration: underline;

    &:hover {
      transition: all 0.3s cubic-bezier(0.88, 0.17, 0.05, 1);
      color: var(--light-pink);
      text-decoration: none;
      transform: translateY(-2px);
    }

    &:active {
      transition: all 0.3s cubic-bezier(0.88, 0.17, 0.05, 1);
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
    padding: 3rem 0 1.8rem 2rem;
    border-radius: 12px;
    overflow-x: auto;
    white-space: pre;

    &::-webkit-scrollbar:horizontal {
      height: 0.4rem;
    }

    ::-webkit-scrollbar-thumb:horizontal {
      background-color: ${({ theme }) => theme.primary};
      border-radius: 4px;
    }

    code {
      max-width: 80%;
    }
  }
  li {
    margin-left: 3rem;
  }
`

export const PostTags = styled.div`
  margin-bottom: 8rem;
  span {
    background: linear-gradient(
      90deg,
      rgba(255, 118, 20, 1) 0%,
      rgba(255, 84, 17, 1) 100%
    );
    color: var(--colour-white);
    padding: 0.5rem;
    border-radius: 0.4rem;
    &:not(:last-child) {
      margin-right: 2rem;
    }
    &:nth-child(4n + 1) {
      background: linear-gradient(
        90deg,
        rgb(129, 110, 167) 0%,
        rgba(155, 0, 250, 1) 100%
      );
    }
    &:nth-child(4n + 2) {
      background: linear-gradient(
        90deg,
        rgba(255, 12, 241, 1) 0%,
        rgba(250, 0, 135, 1) 100%
      );
    }
    &:nth-child(4n + 3) {
      background: linear-gradient(
        90deg,
        rgba(20, 159, 255, 1) 0%,
        rgba(17, 122, 255, 1) 100%
      );
    }
  }
`
