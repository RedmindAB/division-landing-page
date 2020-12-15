import * as React from 'react'
import '../css/index.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Experiences from '../components/Experiences'
import BrandPlatforms from '../components/BrandPlatforms'
import BrandInnovations from '../components/BrandInnovations'
import Footer from '../components/Footer'
import { Spacer } from '../theme/base'
import { Helmet } from 'react-helmet'
import Header from '../components/Header/Header'
import ParticleBackground from '../components/ParticleBackground'

const IndexPage = () => {
  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>DIVISION</title>
        <meta name="description" content="Description for division website" />
        <html lang="en" />
      </Helmet>
      <main style={{ position: 'relative' }}>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -100,
          }}
        >
          <ParticleBackground />
        </div>
        <Hero />
        <About />
        <Experiences />
        <BrandPlatforms />
        <BrandInnovations />
        <Experiences />
        <Spacer exact={100} mobile={40} />
        <Footer />
      </main>
    </>
  )
}

export default IndexPage
