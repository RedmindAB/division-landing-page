import styled from 'styled-components'
import fonts from '../../theme/fonts'
import { breakpoints } from '../../theme/mediaBreakpoints'
import { Headline1 } from '../../theme/typography'

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const ImageContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: -10;
`

export const LogoContainer = styled.div`
  max-width: 100%;

  svg {
    max-width: 100%;
  }
`

export const VideoThumbnail = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const LargeLogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  text-align: center;

  ${breakpoints.mobile} {
    & svg {
      width: 80vw;
    }
  }
`

export const LogoSubtitle = styled(Headline1)`
  font-family: ${fonts.condensedLight};
  text-transform: uppercase;
  letter-spacing: 0;
`
