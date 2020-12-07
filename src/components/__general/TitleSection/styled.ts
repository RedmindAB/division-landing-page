import styled from 'styled-components'

export const Container = styled.section<{ withoutRightPadding?: boolean }>`
  display: grid;
  grid-template-columns: 226px 1fr 80px;
  ${({ withoutRightPadding }) =>
    withoutRightPadding && 'grid-template-columns: 226px auto 0'}
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3rem;
`

export const TitleContainer = styled.div`
  padding-top: 3rem;
  max-width: 150px;
`
