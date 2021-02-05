import React, { FunctionComponent } from 'react'
import { projects } from '../../data/projects'
import { Spacer } from '../../theme/base'
import Carousel from '../Carousel'

const PH = require('../../assets/images/carousel/carousel-3.jpg')

type Props = {
  index: number
}

const carousels = {
  one: {
    slides: [
      {
        picture: projects.find((p) => p.slug === 'impact-week').previewImage,
        year: '2019',
        title: 'Impact Week',
        link: {
          slug: '/showcase/impact-week',
          title: 'Impact Week',
        },
      },
      {
        picture: projects.find((p) => p.slug === 'stockholm-open').previewImage,
        year: '2020',
        title: 'Stockholm Open',
        link: {
          slug: '/showcase/stockholm-open',
          title: 'Stockholm Open',
        },
      },
      {
        picture: PH,
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
        picture: PH,
        year: '2019',
        title: 'Division',
        link: {
          slug: '/showcase/division',
          title: 'Division',
        },
      },
      {
        picture: projects.find((p) => p.slug === 'swedish-olympic-commitee')
          .previewImage,
        year: '2020',
        title: 'Swedish Olympic Commitee',
        link: {
          slug: '/showcase/swedish-olympic-commitee',
          title: 'Swedish Olympic Commitee',
        },
      },
      {
        picture: projects.find((p) => p.slug === 'foodstock').previewImage,
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
      <Spacer exact={140} />
      <Carousel
        slides={index === 0 ? carousels.one.slides : carousels.two.slides}
      />
    </div>
  )
}

export default Experiences
