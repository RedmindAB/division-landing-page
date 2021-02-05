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

export const Container = styled.form`
  .question-input {
    grid-column: 2 / -1;
  }

  .question-input .material-input-container {
    width: calc(264px * 2);
  }

  ${breakpoints.mobile} {
    .question-input {
      grid-column: initial;
    }

    .material-input-container {
      width: 100% !important;
    }

    button {
      width: 100%;
    }
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
