import React, { FunctionComponent } from 'react'
import TitleSection from '../__general/TitleSection'
import Divider from '../__general/Divider'
import { Spacer } from '../../theme/base'
import * as S from './styled'
import { Headline1 } from '../../theme/typography'
import Carousel from '../Carousel'
import { graphql, useStaticQuery } from 'gatsby'
import ParticleBackground from '../ParticleBackground'

const img1_1 = require('../../assets/images/carousel/carousel-1.jpg')
const img1_2 = require('../../assets/images/carousel/carousel-2.jpg')
const img1_3 = require('../../assets/images/carousel/carousel-3.jpg')
const img2_1 = require('../../assets/images/carousel/carousel-4.jpg')
const img2_2 = require('../../assets/images/carousel/carousel-5.jpg')
const img2_3 = require('../../assets/images/carousel/carousel-6.jpg')

type Props = {
  index: number
}

const carousels = {
  one: {
    slides: [
      {
        picture: img1_1,
        year: '2019',
        title: 'Impact Week',
        link: {
          slug: '/showcase/impact-week',
          title: 'Impact Week',
        },
      },
      {
        picture: img1_2,
        year: '2020',
        title: 'Stockholm Open',
        link: {
          slug: '/showcase/stockholm-open',
          title: 'Stockholm Open',
        },
      },
      {
        picture: img1_3,
        year: '1739',
        title: 'Childhood',
        link: {
          slug: '/showcase/childhood',
          title: 'Childhood',
        },
      },
    ],
  },
  two: {
    slides: [
      {
        picture: img2_1,
        year: '2019',
        title: 'Division',
        link: {
          slug: '/showcase/division',
          title: 'Division',
        },
      },
      {
        picture: img2_2,
        year: '2020',
        title: 'Swedish Olympic Commitee',
        link: {
          slug: '/showcase/swedish-olympic-commitee',
          title: 'Swedish Olympic Commitee',
        },
      },
      {
        picture: img2_3,
        year: '2020',
        title: 'Foodstock',
        link: {
          slug: '/showcase/foodstock',
          title: 'Foodstock',
        },
      },
    ],
  },
}

const Experiences: FunctionComponent<Props> = ({ index }) => {
  return (
    <div style={{ position: 'relative' }}>
      <TitleSection title="brands" id="experiences">
        <Divider />
        <Spacer exact={140} />
      </TitleSection>
      <Carousel
        slides={index === 0 ? carousels.one.slides : carousels.two.slides}
      />
    </div>
  )
}

export default Experiences
