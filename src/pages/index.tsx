import * as React from 'react'
import '../css/index.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Experiences from '../components/Experiences'
import BrandPlatforms from '../components/BrandPlatforms'
import BrandInnovations from '../components/BrandInnovations'
import UpcomingEvents from '../components/UpcomingEvents'
import PrimekeyTechDays from '../components/PrimekeyTechDays'
import Footer from '../components/Footer'
import { Spacer } from '../theme/base'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'
import ParticleBackground from '../components/ParticleBackground'

const IndexPage = () => {
  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>DIVISION.</title>
        <meta name="description" content="Description for division website" />
        <html lang="en" />
      </Helmet>
      <main>
        <Hero />
        <Spacer exact={100} mobile={40} />
        <About />
        <Spacer exact={100} mobile={40} />
        <Experiences />
        <BrandPlatforms />
        <BrandInnovations />
        {/* <Spacer exact={100} mobile={40} /> */}
        {/* <UpcomingEvents /> */}
        {/* <Spacer exact={100} mobile={40} /> */}
        {/* <PrimekeyTechDays /> */}
        <Spacer exact={100} mobile={40} />
        <Footer />
      </main>
    </>
  )
}

export default IndexPage
