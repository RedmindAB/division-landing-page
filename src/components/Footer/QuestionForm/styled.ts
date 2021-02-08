import styled, { css } from 'styled-components'
import { breakpoints } from '../../../theme/mediaBreakpoints'
import { body2Styles } from '../../../theme/typography'
import { Row } from '../styled'

const disabledButton = css`
  background: transparent;
  color: var(--accent);
  padding-left: 0;
  cursor: initial;
`

export const Container = styled.form<{ netlify?: boolean }>`
  ${breakpoints.mobile} {
    button {
      width: 100%;
    }
  }
`

export const FormGrid = styled.div`
  display: grid;
  grid-column: 2 / -1;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;

  .question-input {
    grid-column: 1 / -1;
  }

  .material-input-container {
    width: 100%;
  }

  ${breakpoints.mobile} {
    grid-column: initial;
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
`

export const Button = styled.button`
  ${body2Styles}
  background: #fff;
  padding: 8px 30px;
  cursor: pointer;
  height: 40px;
  align-self: flex-end;
  width: 50%;

  ${({ disabled }) => disabled && disabledButton}
`

export const QuestionFormRow = styled(Row)`
  ${breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`
