import styled from 'styled-components'
import { Body2 } from '../../../theme/typography'

export const Container = styled.div``

export const PageLink = styled(Body2)`
  margin-bottom: 1rem;
`

export const Underlined = styled.span`
  text-decoration: underline;
`

export const Mail = styled.a`
  &:hover span {
    text-decoration: underline !important;
  }
`
