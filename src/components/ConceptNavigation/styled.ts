import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1.5rem;
  grid-column-gap: 10rem;
  width: fit-content;
  margin: 0 auto;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`
