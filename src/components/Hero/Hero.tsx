import React from 'react'
import * as S from './styled'
import LogoLarge from '../../assets/svg/LogoLarge'
import { Title2 } from '../../theme/typography'

type Props = {}

const Hero = () => {
  return (
    <S.Container>
      <LogoLarge />
      <div>
        <Title2 uppercase>brand platforms</Title2>
        <Title2 uppercase>brand innovation</Title2>
        <Title2 uppercase>experiences</Title2>
      </div>
    </S.Container>
  )
}

export default Hero
