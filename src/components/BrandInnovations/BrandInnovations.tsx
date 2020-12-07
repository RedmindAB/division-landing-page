import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import { Spacer, TextContainer } from '../../theme/base'
import { Body1, Headline1, Headline2, Title1 } from '../../theme/typography'
import TitleSection from '../__general/TitleSection/TitleSection'
import * as S from './styled'

type Props = {}

const BrandInnovations = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Bg_1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <TitleSection title="brand innovations" background="var(--accent)">
      <TextContainer width="60%">
        <Title1 uppercase>
          We use brand dna coupled with emergent trends as a springobard to
          build on-brand creation
        </Title1>
      </TextContainer>
      <Spacer exact={60} />
      <S.Footer>
        <Headline1 uppercase>
          Develop ideas, solve problems, and make cool new stuff happen.
        </Headline1>
        <Body1>
          This is where the division's community of developers, designers and
          idea generators can hang out, share ideas and help brands in creating
          new products, extending experiences with new rituals/services, and
          building ecosystems.
        </Body1>
      </S.Footer>
      <S.Background>
        <Img fluid={data.file.childImageSharp.fluid} />
      </S.Background>
    </TitleSection>
  )
}

export default BrandInnovations
