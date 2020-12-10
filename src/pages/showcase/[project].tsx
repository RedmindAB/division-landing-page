import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ShowcaseHero from '../../components/ShowcaseHero'
import ConceptValues from '../../components/ConceptValues'
import ConceptAbout from '../../components/ConceptAbout'
import ConceptDescription from '../../components/ConceptDescription'
import PicturesGrid from '../../components/PicturesGrid'
import ConceptPlatform from '../../components/ConceptPlatform'
import { Project, projects } from '../../data/projects'
import Divider from '../../components/__general/Divider'
import { Spacer } from '../../theme/base'

type Props = {
  params: {
    project: string
  }
}

export const ShowcaseContext = createContext<{
  selectedProject: Project
  projects: Project[]
}>({
  selectedProject: projects[0],
  projects,
})

const Showcase: FunctionComponent<Props> = ({ params: { project } }) => {
  const [selectedProject, setSelectedProject] = useState(
    projects.find((p) => p.slug === project) || projects[0]
  )

  useEffect(() => {
    setSelectedProject(projects.find((p) => p.slug === project) || projects[0])
  }, [project])

  return (
    <ShowcaseContext.Provider
      value={{
        selectedProject,
        projects,
      }}
    >
      <Header />
      <ShowcaseHero />
      <Spacer exact={30} />
      <ConceptDescription />
      <div style={{ padding: '3rem' }}>
        <Divider />
      </div>
      <ConceptAbout />
      <Spacer exact={100} mobile={40} />
      <ConceptPlatform />
      <ConceptValues />
      {/* <PicturesGrid pictures={[selectedProject.platformImage]} /> */}
      <Footer />
    </ShowcaseContext.Provider>
  )
}

export default Showcase
