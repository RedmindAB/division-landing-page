import styled, { css } from 'styled-components'
import { body2Styles } from '../../theme/typography'

const disabledButton = css`
  background: transparent;
  color: var(--accent);
  padding-left: 0;
  cursor: initial;
`

export const Container = styled.form``

export const Button = styled.button`
  ${body2Styles}
  background: #fff;
  padding: 8px 30px;
  cursor: pointer;

  ${({ disabled }) => disabled && disabledButton}
`
