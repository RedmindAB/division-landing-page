import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import * as S from './styled'
const HeroVideo = require('../../assets/videos/Hero_1.mp4')
const HeroImage = require('../../assets/images/Hero_1_thumb.png')

type Props = {}

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const onLoadVideo = () => setIsVideoLoaded(true)

  return (
    <S.Container id="hero">
      <S.ImageContainer>
        <S.VideoThumbnail
          src={HeroImage}
          style={{
            opacity: +!isVideoLoaded,
          }}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={onLoadVideo}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </S.ImageContainer>
    </S.Container>
  )
}

export default Hero
