import React, { FunctionComponent, useContext } from 'react'
import { ShowcaseContext } from '../../templates/showcase'
import ConceptNavigation from '../ConceptNavigation'
import Video from '../Video/Video'
import * as S from './styled'

type Props = {}

const ShowcaseHero: FunctionComponent<Props> = () => {
  const { selectedProject } = useContext(ShowcaseContext)

  return (
    <S.Container>
      {selectedProject.heroVideo ? (
        <Video src={selectedProject.heroVideo} />
      ) : (
        <S.Image src={selectedProject.heroImage} />
      )}

      <S.NavigationContainer>
        <ConceptNavigation />
      </S.NavigationContainer>
    </S.Container>
  )
}

export default ShowcaseHero
