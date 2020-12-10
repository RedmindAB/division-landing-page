import styled from 'styled-components'

export const Container = styled.section`
  height: 900px;
  background: var(--accent);
  position: relative;
`

export const SectionTitle = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
`

export const ValuesContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 3rem;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: repeat(2, 40vw);
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  & > * {
    padding-top: 1rem;
    border-top: 1px solid var(--foreground);
  }

  & > *:first-child,
  & > *:nth-child(2) {
    padding-top: 0;
    border-top: none;
  }
`
