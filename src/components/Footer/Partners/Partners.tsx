import React, { FunctionComponent } from 'react'
import { Body1 } from '../../../theme/typography'
import { Row } from '../styled'
import * as S from './styled'

type Props = {
  title: string
  logos: string[]
}

const Partners: FunctionComponent<Props> = ({ title, logos }) => {
  const renderLogo = (src: string, index: number) => {
    return (
      <S.LogoContainer key={index}>
        <img src={src} />
      </S.LogoContainer>
    )
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <Body1 uppercase>{title}</Body1>
      </S.TitleContainer>
      <S.LogosRow>{logos.map(renderLogo)}</S.LogosRow>
    </S.Container>
  )
}

export default Partners
