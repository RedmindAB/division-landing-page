import React from 'react'
import TitleSection from '../__general/TitleSection'
import Divider from '../__general/Divider'
import { Spacer } from '../../theme/base'
import * as S from './styled'
import { Headline1 } from '../../theme/typography'
import Carousel from '../Carousel'
import { graphql, useStaticQuery } from 'gatsby'

type Props = {}

const Experiences = () => {
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
    <>
      <TitleSection title="experiences" id="experiences">
        <Divider />
        <Spacer exact={140} />
      </TitleSection>
      <Carousel
        title="stockholm design week"
        year="2019"
        pictures={[
          data.file.childImageSharp.fluid,
          data.file.childImageSharp.fluid,
          data.file.childImageSharp.fluid,
        ]}
      />
    </>
  )
}

export default Experiences
