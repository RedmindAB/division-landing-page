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

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Experiences />
      <BrandPlatforms />
      <BrandInnovations />
      <UpcomingEvents />
      <PrimekeyTechDays />
      <Footer />
    </main>
  )
}

export default IndexPage
