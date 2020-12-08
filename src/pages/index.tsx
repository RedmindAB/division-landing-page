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

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DIVISION.</title>
        <meta name="description" content="Description for division website" />
        <html lang="en" />
      </Helmet>
      <main>
        <Hero />
        <Spacer exact={100} mobile={40} />
        <Zoom>
          <About />
        </Zoom>
        <Spacer exact={100} mobile={40} />
        <Experiences />
        <Spacer exact={100} mobile={40} />
        <Slide left>
          <BrandPlatforms />
        </Slide>
        <Spacer exact={100} mobile={40} />
        <Slide right>
          <BrandInnovations />
        </Slide>
        <Spacer exact={100} mobile={40} />
        <UpcomingEvents />
        <Spacer exact={100} mobile={40} />
        <PrimekeyTechDays />
        <Spacer exact={100} mobile={40} />
        <Footer />
      </main>
    </>
  )
}

export default IndexPage
