import styled from 'styled-components'

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
