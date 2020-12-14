import React from 'react'
import * as S from './styled'
import Img from 'gatsby-image'
import TitleSection from '../__general/TitleSection'
import { Spacer, TextContainer } from '../../theme/base'
import { Body1, Headline1, Outlined, Title1 } from '../../theme/typography'
import { graphql, useStaticQuery } from 'gatsby'
import { mediaQueries } from '../../theme/mediaBreakpoints'
import { useMediaQuery } from 'react-responsive'
import ParticleBackground from '../ParticleBackground'
import Slide from 'react-reveal/Slide'

type Props = {}

const BrandPlatforms = () => {
  const isMobile = useMediaQuery({
    query: mediaQueries.mobile,
  })
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Bg_2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const br = isMobile ? ' ' : <br />

  return (
    <div style={{ position: 'relative' }}>
      <Spacer exact={100} mobile={40} />
      {/* <ParticleBackground /> */}
      <TitleSection title="what we do" id="brand-platforms">
        <Slide up>
          <S.Container>
            <S.TopTextContainer>
              <Title1 uppercase>
                By fusing creativity{br} and technical{br}innovation{br}
              </Title1>
            </S.TopTextContainer>
            <Title1 uppercase>
              together,{br}
              we{' '}
              <Outlined>
                leave{br}'ordinary'{br} behind
              </Outlined>
              and{br}create{br}on-brand{br}innovation{br}programs.
            </Title1>
            <S.BodyContainer>
              <Spacer exact={100} mobile={1} />
              <TextContainer width="100%" mobile="100%">
                <Headline1 uppercase>
                  We share your challenges and ambitions, we understand what you
                  need
                  <br />
                  <br />
                </Headline1>
                <Body1>
                  We reconcile the sharpness of strategy, the richness of
                  legacy, purpose, and pedigree.
                  <br /> <br />
                  For Brands to innovate, stakeholders need more robust tools.
                  Biometrics, artificial intelligence, the internet of things
                  (IoT), facial recognition, and machine learning are elements
                  of this new technology-fueled era.
                  <br /> <br />
                  Working with your Brand we create new products, extending
                  experiences with new rituals/services, and building platforms
                  ecosystems
                </Body1>
              </TextContainer>
            </S.BodyContainer>
          </S.Container>
          {/* <S.ImageContainer>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ height: '100%', width: '100%' }}
            imgStyle={{
              backgroundSize: 'cover',
            }}
          />
        </S.ImageContainer> */}
        </Slide>
      </TitleSection>
      <Spacer exact={100} mobile={40} />
    </div>
  )
}

export default BrandPlatforms
