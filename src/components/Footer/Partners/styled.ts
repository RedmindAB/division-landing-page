import styled from 'styled-components'
import { breakpoints } from '../../../theme/mediaBreakpoints'

export const Container = styled.div``

export const TitleContainer = styled.div`
  width: 200px;

  ${breakpoints.mobile} {
    width: 100%;
  }
`

export const LogosRow = styled.div`
  grid-column: 2 / -1;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;

  & > div {
    margin: 0 10px 20px 10px;
  }

  ${breakpoints.mobile} {
    grid-column: 1;
  }
`

export const LogoContainer = styled.div`
  background: white;
  height: 100px;
  width: 100px;
`
