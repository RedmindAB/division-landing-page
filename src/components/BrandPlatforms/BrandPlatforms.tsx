import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Slide from 'react-reveal/Slide'
import { Spacer, TextContainer } from '../../theme/base'
import { mediaQueries } from '../../theme/mediaBreakpoints'
import { Body1, Headline1, Outlined, Title1 } from '../../theme/typography'
import TitleSection from '../__general/TitleSection'
import * as S from './styled'

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
      <TitleSection title="for brands" id="brand-platforms">
        <Slide up>
          <S.Container>
            <S.TopTextContainer>
              <Title1 uppercase>
                FUTURE FIT ACTIONS{br}FOR YOUR{br}ORGANISATION.
              </Title1>
            </S.TopTextContainer>
            <Title1 uppercase>
              we <Outlined>leave 'ordinary' behind</Outlined> and Create
              On-Brand innovation programs.
            </Title1>
            <S.BodyContainer>
              <Spacer exact={100} mobile={1} />
              <TextContainer width="100%" mobile="100%">
                <Headline1 uppercase>
                  We help you shift your focus from linear project-based
                  communication to circular platform-based.
                  <br />
                  <br />
                </Headline1>
                <Body1>
                  This maximizes your investment, reduces costs and
                  environmental impact. It also gathers all your organization’s
                  assets in one place for greater long-term impact.
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
