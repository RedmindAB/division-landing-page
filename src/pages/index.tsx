import * as React from 'react'
import { Helmet } from 'react-helmet'
import About from '../components/About'
import BrandInnovations from '../components/BrandInnovations'
import BrandPlatforms from '../components/BrandPlatforms'
import Experiences from '../components/Experiences'
import Footer from '../components/Footer'
import FullScreenReveal from '../components/FullScreenReveal'
import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import '../css/index.css'
import { Spacer } from '../theme/base'

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
        <Hero />
        <div style={{ background: 'var(--background)' }}>
          <About />
          <Experiences index={0} />
          <BrandPlatforms />
          <BrandInnovations />
          <Experiences index={1} />
          <Spacer exact={100} mobile={40} />
          <Footer />
        </div>
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
            style={{ objectFit: 'cover' }}
          >
            <source
              src={require('../assets/videos/Footer.mp4')}
              type="video/mp4"
            />
          </video>
        </FullScreenReveal>
      </main>
    </>
  )
}

export default IndexPage
