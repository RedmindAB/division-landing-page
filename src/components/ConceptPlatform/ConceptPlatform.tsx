import React, { useContext } from 'react'
import { ShowcaseContext } from '../../pages/showcase/[project]'
import { Body1, Headline2, Title2 } from '../../theme/typography'
import * as S from './styled'

type Props = {}

const ConceptPlatform = () => {
  const { selectedProject } = useContext(ShowcaseContext)

  const renderKeywords = (title: string) => (
    <Title2 uppercase key={title}>
      {title}
    </Title2>
  )

  return (
    <S.Container id="project-platform">
      <S.SectionTitle>
        <Body1 uppercase>WORK</Body1>
      </S.SectionTitle>
      <S.PlatformsContainer>
        {selectedProject.keywords.map(renderKeywords)}
      </S.PlatformsContainer>
    </S.Container>
  )
}

export default ConceptPlatform
