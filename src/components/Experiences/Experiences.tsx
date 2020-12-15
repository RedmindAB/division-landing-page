import React from 'react'
import TitleSection from '../__general/TitleSection'
import Divider from '../__general/Divider'
import { Spacer } from '../../theme/base'
import * as S from './styled'
import { Headline1 } from '../../theme/typography'
import Carousel from '../Carousel'
import { graphql, useStaticQuery } from 'gatsby'
import ParticleBackground from '../ParticleBackground'

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
    <div style={{ position: 'relative' }}>
      {/* <ParticleBackground /> */}
      <TitleSection title="brands" id="experiences">
        <Divider />
        <Spacer exact={140} />
      </TitleSection>
      <Carousel
        slides={[
          {
            picture: data.file.childImageSharp.fluid,
            year: '2019',
            title: 'Stockholm design week',
            link: {
              slug: '/showcase/stockholm-open',
              title: 'Stockholm open',
            },
          },
          {
            picture: data.file.childImageSharp.fluid,
            year: '2020',
            title: 'Some other event',
            link: {
              slug: '/showcase/stockholm-closed',
              title: 'Stockholm closed',
            },
          },
          {
            picture: data.file.childImageSharp.fluid,
            year: '1739',
            title: 'Another event entirely',
          },
        ]}
      />
    </div>
  )
}

export default Experiences