import styled from 'styled-components'

export const Container = styled.div`
  padding: 3rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
`

export const Event = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem 0;
`
