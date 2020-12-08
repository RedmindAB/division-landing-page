import React from 'react'
import * as S from './styled'
import Img from 'gatsby-image'
import TitleSection from '../__general/TitleSection'
import { Spacer, TextContainer } from '../../theme/base'
import { Body1, Headline1, Outlined, Title1 } from '../../theme/typography'
import { graphql, useStaticQuery } from 'gatsby'
import { mediaQueries } from '../../theme/mediaBreakpoints'
import { useMediaQuery } from 'react-responsive'

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
    <TitleSection title="brand platforms" id="brand-platforms">
      <S.Container>
        <Title1 uppercase>
          We build
          {br}
          on-brand
          {br}
          <Outlined>programs</Outlined>
          {br}
          that
          {br}
          transform
          {br}
          your brand
          {br}
          into a{br}
          platform
          {br}
        </Title1>
        <div>
          <Spacer exact={320} mobile={1} />
          <TextContainer width="60%" mobile="100%">
            <Headline1 uppercase>
              The old brand platforms, which say too much or too little, are not
              fit to grow multi-channel brand equity
              <br />
              <br />
            </Headline1>
            <Body1>
              We reconcile the sharpness of strategy, the richness of legacy,
              purpose, and pedigree.
              <br />
              <br />
              Brands are to innovate, stakeholders need more robust tools.
              <br />
              <br />
              Biometrics, artificial intelligence, the internet of things (IoT),
              facial recognition, new technology-fueled era. Working with your
              brand we create new products, extending experiences with new
              rituals/services, and building platform ecosystems.
            </Body1>
          </TextContainer>
        </div>
      </S.Container>
      <S.ImageContainer>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ height: '100%', width: '100%' }}
          imgStyle={{
            backgroundSize: 'cover',
          }}
        />
      </S.ImageContainer>
    </TitleSection>
  )
}

export default BrandPlatforms
