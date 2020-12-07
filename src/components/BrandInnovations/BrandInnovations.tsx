import React from 'react'
import { Spacer, TextContainer } from '../../theme/base'
import { Body1, Title1 } from '../../theme/typography'
import TitleSection from '../__general/TitleSection/TitleSection'
import * as S from './styled'

type Props = {}

const BrandInnovations = () => {
  return (
    <TitleSection title="brand innovations">
      <TextContainer width="60%">
        <Title1 uppercase>
          We use brand dna coupled with emergent trends as a springobard to
          build on-brand creation
        </Title1>
      </TextContainer>
      <Spacer exact={180} />
      <S.Footer>
        <Body1>
          Develop ideas, solve problems, and make cool new stuff happen.
        </Body1>
        <Body1>
          This is where the division's community of developers, designers and
          idea generators can hang out, share ideas and help brands in creating
          new products, extending experiences with new rituals/services, and
          building ecosystems.
        </Body1>
      </S.Footer>
    </TitleSection>
  )
}

export default BrandInnovations
