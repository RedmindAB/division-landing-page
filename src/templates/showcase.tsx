import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import { Helmet } from 'react-helmet'
import ConceptAbout from '../components/ConceptAbout'
import ConceptDescription from '../components/ConceptDescription'
import ConceptValues from '../components/ConceptValues'
import Footer from '../components/Footer'
import FullScreenReveal from '../components/FullScreenReveal'
import Header from '../components/Header'
import PicturesGrid from '../components/PicturesGrid'
import ShowcaseHero from '../components/ShowcaseHero'
import Divider from '../components/__general/Divider'
import '../css/index.css'
import { Project, projects } from '../data/projects'
import useIsMobile from '../hooks/useIsMobile'
import { Spacer } from '../theme/base'

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
  const isMobile = useIsMobile()
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
        <title>DIVISION - {project.conceptName}</title>
        <meta name="description" content={project.body} />
        <html lang="en" />
      </Helmet>
      <Header />
      <ShowcaseHero />
      <div style={{ background: 'var(--background)' }}>
        <Spacer exact={30} />
        <ConceptDescription />
        <div style={{ padding: '3rem' }}>
          <Divider />
        </div>
        <ConceptAbout />
        <Spacer exact={100} mobile={40} />
        {/* <ConceptPlatform /> */}
        <PicturesGrid initiatives={selectedProject.initiatives} />
        <ConceptValues />
        <Footer />
      </div>
      {!isMobile && (
        <FullScreenReveal
          onReveal={() =>
            (document.getElementById('reveal-video') as HTMLVideoElement).play()
          }
        >
          <video
            id="reveal-video"
            muted
            loop
            playsInline
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          >
            <source
              src={require('../assets/videos/Footer.mp4')}
              type="video/mp4"
            />
          </video>
        </FullScreenReveal>
      )}
    </ShowcaseContext.Provider>
  )
}

export default Showcase
