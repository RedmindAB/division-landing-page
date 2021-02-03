import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Slide from 'react-reveal/Slide'
import { Spacer, TextContainer } from '../../theme/base'
import { Body1, Headline1, Outlined, Title1 } from '../../theme/typography'
import useDesktopBr from '../../hooks/useDesktopBr'
import TitleSection from '../__general/TitleSection/TitleSection'
import * as S from './styled'

type Props = {}

const BrandInnovations = () => {
  const br = useDesktopBr()
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

  return (
    <TitleSection
      title="Co:lab"
      id="brand-innovations"
      style={{ padding: '6rem 3rem', backgroundColor: 'var(--accent)' }}
    >
      <Slide up>
        <div className="title-section-content">
          <TextContainer width="60%" mobile="100%">
            <Title1 uppercase>
              <Outlined>
                WE CREATE
                {br}
                BRANDS
                {br}
              </Outlined>
              Let's co-create your next business opportunity.
            </Title1>
          </TextContainer>
          <Spacer exact={60} mobile={30} />
          <S.Footer>
            <Headline1 uppercase>
              We create and invests in brand extensions that share our beliefs.
            </Headline1>
            <Body1>
              The future of branding is experience based, and by implementation
              a platform strategy we will make your next initiative both
              technological and sustainable future ready.
            </Body1>
            <Spacer exact={100} />
          </S.Footer>
        </div>
      </Slide>
      <S.Background>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ height: '100%', width: '100%' }}
          imgStyle={{
            backgroundSize: 'cover',
          }}
        />
      </S.Background>
    </TitleSection>
  )
}

export default BrandInnovations
