import React, { useContext } from 'react'
import { ShowcaseContext } from '../../templates/showcase'
import { Spacer } from '../../theme/base'
import fonts from '../../theme/fonts'
import { Body2, Headline1 } from '../../theme/typography'
import Divider from '../__general/Divider'
import * as S from './styled'

const ConceptDescription = () => {
  const { selectedProject } = useContext(ShowcaseContext)

  return (
    <S.Container id="project-description">
      <Headline1 uppercase>{selectedProject.conceptDescription}</Headline1>
      <div>
        <Divider />
        <Spacer exact={30} />
        <Body2 uppercase style={{ fontFamily: fonts.headline.condensedBold }}>
          {selectedProject.conceptName}
        </Body2>
        <Body2>{selectedProject.date}</Body2>
      </div>
    </S.Container>
  )
}

export default ConceptDescription
