import styled from 'styled-components'
import { device } from '../components/Theme/Theme'
export const BlogWrapper = styled.section`
  margin: 5rem auto;

  h1 {
    margin-bottom: 4rem;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 2rem;

  & > div {
    width: 94%;
  }
`
