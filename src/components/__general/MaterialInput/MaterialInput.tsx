import React, { FunctionComponent } from 'react'
import { Body2 } from '../../../theme/typography'
import * as S from './styled'

type Props = {
  label: string
  ref?: any
} & React.HTMLProps<HTMLInputElement>

const MaterialInput: FunctionComponent<Props> = React.forwardRef(
  ({ label, placeholder, ...inputProps }, ref) => {
    const props = inputProps as any

    return (
      <S.Container>
        <S.Input required {...props} ref={ref} />
        <S.LabelContainer>
          <Body2>{label}</Body2>
        </S.LabelContainer>
        <S.LineActive />
      </S.Container>
    )
  }
)

export default MaterialInput
