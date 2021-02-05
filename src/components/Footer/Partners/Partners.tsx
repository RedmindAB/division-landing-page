import React, { FunctionComponent } from 'react'
import { Body1 } from '../../../theme/typography'
import { Row } from '../styled'
import * as S from './styled'

type Props = {
  title: string
}

const Partners: FunctionComponent<Props> = ({ title }) => {
  return (
    <S.Container>
      <Row>
        <S.TitleContainer>
          <Body1 uppercase>{title}</Body1>
        </S.TitleContainer>
        <S.LogosRow>
          <S.LogoContainer />
          <S.LogoContainer />
          <S.LogoContainer />
          <S.LogoContainer />
          <S.LogoContainer />
          <S.LogoContainer />
          <S.LogoContainer />
          <S.LogoContainer />
          <S.LogoContainer />
        </S.LogosRow>
      </Row>
    </S.Container>
  )
}

export default Partners
