import styled from 'styled-components'

export const Container = styled.div``

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
`

export const Background = styled.div`
  z-index: -10;
  position: absolute;
  width: 50%;
  max-width: 700px;
  top: 0;
  right: 0;
`
