import React, { FunctionComponent } from 'react'
import * as S from './styled'
import ConceptNavigation from '../ConceptNavigation'

type Props = {}

const ShowcaseHero: FunctionComponent<Props> = () => {
  return (
    <S.Container>
      <S.NavigationContainer>
        <ConceptNavigation />
      </S.NavigationContainer>
    </S.Container>
  )
}

export default ShowcaseHero
