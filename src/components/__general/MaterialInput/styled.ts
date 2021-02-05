import styled from 'styled-components'
import { body2Styles } from '../../../theme/typography'

export const Container = styled.div.attrs(() => ({
  className: 'material-input-container',
}))`
  margin-top: 40px;
  position: relative;
  width: 264px;
`

export const Input = styled.input`
  ${body2Styles}
  background: transparent;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 100%;
  color: white;

  &:focus {
    outline: none;
  }

  &:focus ~ .line-filled {
    width: 100%;
  }

  &:focus ~ .label-container,
  &:valid ~ .label-container {
    bottom: 2.2rem;

    & * {
      font-size: 1.2rem;
    }
  }
`

export const LabelContainer = styled.div.attrs(() => ({
  className: 'label-container',
}))`
  position: absolute;
  bottom: 0;
  transition: all 0.5s;
  opacity: 0.7;
  pointer-events: none;

  & * {
    transition: all 0.5s;
  }
`

export const LineActive = styled.div.attrs(() => ({
  className: 'line-filled',
}))`
  width: 0%;
  height: 1px;
  position: absolute;
  background: var(--accent);
  bottom: 0;
  left: 0;
  transition: width 0.5s;
`
