import styled from 'styled-components'

export const Container = styled.nav<{ showBackground: boolean }>`
  padding: 2rem 3rem;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  ${({ showBackground }) => showBackground && 'background: rgba(0, 0, 0, 0.8)'}
`

export const NavContainer = styled.div`
  display: flex;

  & > * {
    margin-left: 3rem;
  }
`

export const DrawerMenu = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  height: calc(100vh - 60px);
  padding: 3rem;
  z-index: 100;

  & * {
    padding-bottom: 2rem;
  }
`
