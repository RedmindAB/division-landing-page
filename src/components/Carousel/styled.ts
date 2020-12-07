import styled, { css } from 'styled-components'
import { Headline2 } from '../../theme/typography'

export const overlayStyles = css`
  z-index: 10;
  position: absolute;
  left: 3rem;
`

export const Container = styled.div`
  height: 900px;
  margin: 2rem 0;
  position: relative;
`

export const TitleContainer = styled.div`
  ${overlayStyles}
  display: grid;
  width: fit-content;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  transform: translateY(-1rem);
`

export const Year = styled(Headline2)`
  grid-row: 2;
  grid-column: 2;
  justify-self: flex-end;
`

export const SlideNumber = styled(Headline2)`
  grid-row: 3;
`

export const BottomContainer = styled.div`
  ${overlayStyles};
  bottom: 0;
  transform: translateY(1rem);
`

export const PicturesContainer = styled.div<{ offset: number }>`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-x: hidden;
  width: 400vw;

  transition: transform 1s;
  transform: translateX(-${({ offset }) => offset * 100}vw);
`

export const PictureContainer = styled.div`
  height: 100%;
  width: 100vw;
  background: #444;
`
