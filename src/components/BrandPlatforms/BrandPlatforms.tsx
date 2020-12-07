import React from 'react'
import * as S from './styled'
import TitleSection from '../__general/TitleSection'
import { Spacer, TextContainer } from '../../theme/base'
import { Body1, Headline1, Title1 } from '../../theme/typography'

type Props = {}

const BrandPlatforms = () => {
  return (
    <TitleSection title="brand platforms">
      <S.Container>
        <Title1 uppercase>
          We build
          <br />
          on-brand
          <br />
          programs
          <br />
          that
          <br />
          transform
          <br />
          your brand
          <br />
          into a<br />
          platform
          <br />
        </Title1>
        <div>
          <Spacer exact={320} />
          <TextContainer width="80%">
            <Headline1 uppercase>
              The old brand platforms, which say too much or too little, are not
              fit to grow multi-channel brand equity
              <br />
              <br />
            </Headline1>
            <Body1>
              We reconcile the sharpness of strategy, the richness of legacy,
              purpose, and pedigree.
              <br />
              <br />
              Brands are to innovate, stakeholders need more robust tools.
              <br />
              <br />
              Biometrics, artificial intelligence, the internet of things (IoT),
              facial recognition, new technology-fueled era. Working with your
              brand we create new products, extending experiences with new
              rituals/services, and building platform ecosystems.
            </Body1>
          </TextContainer>
        </div>
      </S.Container>
    </TitleSection>
  )
}

export default BrandPlatforms
