import React from 'react'
import * as S from './styled'
import LogoLarge from '../../assets/svg/LogoLarge'
import Img from 'gatsby-image'
import { Title2 } from '../../theme/typography'
import { graphql, useStaticQuery } from 'gatsby'

type Props = {}

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.ImageContainer>
        <Img
          style={{ height: '100%' }}
          imgStyle={{ backgroundSize: 'cover' }}
          fluid={data.file.childImageSharp.fluid}
          alt="hero-image"
        />
      </S.ImageContainer>
      <S.LogoContainer>
        <LogoLarge />
      </S.LogoContainer>
      <div>
        <Title2 uppercase style={{ color: 'var(--accent)' }}>
          brand platforms
        </Title2>
        <Title2 uppercase>brand innovation</Title2>
        <Title2 uppercase>experiences</Title2>
      </div>
    </S.Container>
  )
}

export default Hero
