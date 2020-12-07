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

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Spacer exact={100} />
      <About />
      <Spacer exact={100} />
      <Experiences />
      <Spacer exact={100} />
      <BrandPlatforms />
      <Spacer exact={100} />
      <BrandInnovations />
      <Spacer exact={100} />
      <UpcomingEvents />
      <Spacer exact={100} />
      <PrimekeyTechDays />
      <Spacer exact={100} />
      <Footer />
    </main>
  )
}

export default IndexPage
