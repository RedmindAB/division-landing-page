import React, { FunctionComponent } from 'react'
import { Body1 } from '../../../theme/typography'
import * as S from './styled'

type Props = {
  title: string
}

const TitleSection: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <Body1 uppercase>{title}</Body1>
      </S.TitleContainer>
      <div>{children}</div>
    </S.Container>
  )
}

export default TitleSection
