import styled from 'styled-components'

export const Container = styled.nav<{ showBackground: boolean }>`
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s;

  ${({ showBackground }) => showBackground && 'background: rgba(0, 0, 0, 0.7)'}
`

export const NavContainer = styled.div`
  display: flex;

  & > * {
    margin-left: 3rem;
  }
`
