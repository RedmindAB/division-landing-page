import React, { useContext } from 'react'
import { Project, ProjectValue } from '../../data/projects'
import { ShowcaseContext } from '../../pages/showcase/[project]'
import { Body1, Title1, Title2 } from '../../theme/typography'
import * as S from './styled'

type Props = {}

const ConceptValues = () => {
  const { selectedProject } = useContext(ShowcaseContext)

  const renderValue = (value: ProjectValue) => {
    return (
      <>
        <Title2>{value.title}</Title2>
        <Body1>{value.body}</Body1>
      </>
    )
  }

  return (
    <S.Container id="project-values">
      <S.SectionTitle>
        <Body1 uppercase>
          PLATFORM
          <br />
          PLAY
        </Body1>
      </S.SectionTitle>
      <S.ValuesContainer>
        {selectedProject.values.map(renderValue)}
      </S.ValuesContainer>
    </S.Container>
  )
}

export default ConceptValues
