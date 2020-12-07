import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-end;

  & > div {
    justify-self: center;
  }

  & > div:first-child {
    justify-self: flex-start;
  }
`
