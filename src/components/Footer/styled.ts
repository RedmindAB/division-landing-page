import styled from 'styled-components'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  padding: 3rem 3rem 3rem 24rem;

  ${breakpoints.mobile} {
    padding: 3rem;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

export const Underlined = styled.span`
  text-decoration: underline;
`

export const Mail = styled.a`
  &:hover span {
    text-decoration: underline !important;
  }
`
