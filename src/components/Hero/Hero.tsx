import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import * as S from './styled'
const HeroVideo = require('../../assets/videos/Hero_1.mp4')

type Props = {}

const Hero = () => {
  return (
    <S.Container id="hero">
      <S.ImageContainer>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </S.ImageContainer>
    </S.Container>
  )
}

export default Hero
