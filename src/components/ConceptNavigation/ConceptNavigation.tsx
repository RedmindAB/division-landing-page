import React, { FunctionComponent, useContext } from 'react'
import { Project } from '../../data/projects'
import * as S from './styled'
import { ShowcaseContext } from '../../pages/showcase/[project]'
import { Body1 } from '../../theme/typography'
import { Link } from 'gatsby'

type Props = {}

const ConceptNavigation: FunctionComponent<Props> = ({}) => {
  const { projects, selectedProject } = useContext(ShowcaseContext)

  const renderProject = (project: Project) => {
    const isSelected = project.slug === selectedProject.slug

    return (
      <Link to={`/showcase/${project.slug}`} key={project.slug}>
        <Body1 uppercase key={project.slug} accent={isSelected}>
          {project.conceptName}
        </Body1>
      </Link>
    )
  }

  return <S.Container>{projects.map(renderProject)}</S.Container>
}

export default ConceptNavigation
