import React, { FunctionComponent } from 'react'
import * as S from './styled'

type Props = {}

const FullScreenReveal: FunctionComponent<Props> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

export default FullScreenReveal
