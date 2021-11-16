import styled from 'styled-components'

export const BlogContent = styled.div`
  cursor: pointer;
  width: 36rem;
  transition: all 0.2s cubic-bezier(0.88, 0.17, 0.05, 1);
  background: #242424;
  border-radius: 2rem;
  border: 1px solid #444;
  overflow: hidden;

  &:hover {
    transition: all 0.2s cubic-bezier(0.88, 0.17, 0.05, 1);
    box-shadow: var(--medium-shadow);

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
  display: flex;
  align-items: center;
  span {
    background: #444;

    color: var(--colour-white);
    padding: 0.5rem;
    border-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      padding-right: 2rem;
      margin-right: 1rem;
    }
  }
`
