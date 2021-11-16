import styled from 'styled-components'

export const BlogContent = styled.div`
  cursor: pointer;
  width: 36rem;
  transition: all 0.2s cubic-bezier(0.88, 0.17, 0.05, 1);
  background: #242424;
  border-radius: 2 rem;
  border: 1 px solid #444;
  overflow: hidden;

  &:hover {
    transition: all 0.2s cubic-bezier(0.88, 0.17, 0.05, 1);
    box-shadow: var(--medium-shadow);

    /* span {
      color: var(--colour-white);
      padding: 0.5rem;
      border-radius: 0.4rem;
    } */

    img {
      transition: all 0.2s cubic-bezier(0.88, 0.17, 0.05, 1);
      transform: scale(1.1);
    }
  }
`

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
`

export const BlogTagWrapper = styled.div`
  margin-top: 2rem;
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
      padding-right: 2rem;
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
