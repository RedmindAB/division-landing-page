import styled from 'styled-components'
import { anchorStyles, Body1 } from '../../../theme/typography'

export const Container = styled.div``

export const Link = styled(Body1)`
  & a {
    ${anchorStyles}
  }
`
