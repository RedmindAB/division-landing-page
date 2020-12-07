import styled from 'styled-components'
import { Body2 } from '../../theme/typography'

export const Container = styled.div`
  padding: 3rem 3rem 3rem 24rem;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`

export const Underlined = styled.span`
  text-decoration: underline;
`

export const Mail = styled.a`
  &:hover span {
    text-decoration: underline !important;
  }
`
