import React from 'react'
import { TextContainer } from '../../theme/base'
import { Title1 } from '../../theme/typography'
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
    </TitleSection>
  )
}

export default BrandInnovations
