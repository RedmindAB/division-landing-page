import styled from 'styled-components'
import { breakpoints } from '../../../theme/mediaBreakpoints'
import { Row } from '../styled'

export const Container = styled(Row)`
  grid-template-columns: auto 1fr;
  grid-gap: 100px;
`

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
    margin: 0 18px 18px 18px;
  }

  ${breakpoints.mobile} {
    grid-column: 1;
    justify-content: center;
  }
`

export const LogoContainer = styled.div`
  min-height: 100px;
  width: 164px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100%;
  }
`
