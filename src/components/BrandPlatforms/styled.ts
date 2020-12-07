import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 4rem;
`

export const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -10;
  width: 40%;
  height: 60%;
`
