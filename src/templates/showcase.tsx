import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import ConceptAbout from '../components/ConceptAbout'
import ConceptDescription from '../components/ConceptDescription'
import ConceptPlatform from '../components/ConceptPlatform'
import ConceptValues from '../components/ConceptValues'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ShowcaseHero from '../components/ShowcaseHero'
import Divider from '../components/__general/Divider'
import { Project, projects } from '../data/projects'
import { Spacer } from '../theme/base'
import '../css/index.css'
import { Helmet } from 'react-helmet'

type Props = {
  pageContext: {
    project: Project
  }
}

export const ShowcaseContext = createContext<{
  selectedProject: Project
  projects: Project[]
}>({
  selectedProject: projects[0],
  projects,
})

const Showcase: FunctionComponent<Props> = ({ pageContext: { project } }) => {
  const [selectedProject, setSelectedProject] = useState(
    projects.find((p) => p.slug === project.slug) || projects[0]
  )

  useEffect(() => {
    setSelectedProject(
      projects.find((p) => p.slug === project.slug) || projects[0]
    )
  }, [project])

  return (
    <ShowcaseContext.Provider
      value={{
        selectedProject,
        projects,
      }}
    >
      <Helmet>
        <title>DIVISION - ${project.conceptName}</title>
        <meta name="description" content={project.body} />
        <html lang="en" />
      </Helmet>
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