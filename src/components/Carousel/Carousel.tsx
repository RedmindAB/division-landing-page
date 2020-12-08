import React, { FunctionComponent, useEffect, useState } from 'react'
import { Headline2 } from '../../theme/typography'
import Img from 'gatsby-image'
import PageDots from '../PageDots'
import * as S from './styled'

type Props = {
  pictures: any[]
  title: string
  year: string
}

const Carousel: FunctionComponent<Props> = ({ pictures, title, year }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeIndex + 1 === pictures.length) {
        return setActiveIndex(0)
      }
      setActiveIndex(activeIndex + 1)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [activeIndex])

  let indexStr = activeIndex + 1 + ''
  let maxIndexStr = pictures.length + ''

  if (indexStr.length < 2) {
    indexStr = `0${indexStr}`
  }

  if (maxIndexStr.length < 2) {
    maxIndexStr = `0${maxIndexStr}`
  }

  const renderPicture = (image: any, index: number) => {
    return (
      <S.PictureContainer key={index}>
        <Img
          style={{ height: '100%', width: '100%' }}
          imgStyle={{ backgroundSize: 'cover' }}
          fluid={image}
          alt={`slideshow-image-${index + 1}`}
          key={index + ''}
        />
      </S.PictureContainer>
    )
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <Headline2 uppercase>{title}</Headline2>
        <S.Year>{year}</S.Year>
        <S.SlideNumber>
          {indexStr} / {maxIndexStr}
        </S.SlideNumber>
      </S.TitleContainer>
      <S.BottomContainer>
        <PageDots current={activeIndex + 1} amount={pictures.length} />
      </S.BottomContainer>
      <S.PicturesContainer offset={activeIndex}>
        {pictures.map(renderPicture)}
      </S.PicturesContainer>
    </S.Container>
  )
}

export default Carousel
