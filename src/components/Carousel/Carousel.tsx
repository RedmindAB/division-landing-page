import React, { FunctionComponent, useEffect, useState } from 'react'
import { Headline2, Outlined, Title1 } from '../../theme/typography'
import Img from 'gatsby-image'
import PageDots from '../PageDots'
import * as S from './styled'
import { Link } from 'gatsby'

type NavLink = {
  slug: string
  title: string
}

type Slide = {
  picture: string
  title: string
  year: string
  link?: NavLink
}

type Props = {
  slides: Slide[]
  title?: string
  year?: string
}

const Carousel: FunctionComponent<Props> = ({ slides, title, year }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeIndex + 1 === slides.length) {
        return setActiveIndex(0)
      }
      setActiveIndex(activeIndex + 1)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [activeIndex])

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

  const currentSlide = slides[activeIndex]
  const hasLinks = slides.some((slide) => slide.link)
  const links = hasLinks && slides.filter((s) => s.link).map((s) => s.link)
  let indexStr = activeIndex + 1 + ''
  let maxIndexStr = slides.length + ''

  if (indexStr.length < 2) {
    indexStr = `0${indexStr}`
  }

  if (maxIndexStr.length < 2) {
    maxIndexStr = `0${maxIndexStr}`
  }

  const renderLink = ({ slug, title }: NavLink) => {
    return (
      <Link to={slug} key={slug}>
        <Title1 uppercase>
          <Outlined>{title}</Outlined>
        </Title1>
      </Link>
    )
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <Headline2 uppercase>{title || currentSlide.title}</Headline2>
        <S.Year>{year || currentSlide.year}</S.Year>
        <S.SlideNumber>
          {indexStr} / {maxIndexStr}
        </S.SlideNumber>
      </S.TitleContainer>
      <S.BottomContainer>
        <PageDots current={activeIndex + 1} amount={slides.length} />
      </S.BottomContainer>
      <S.PicturesContainer offset={activeIndex}>
        {slides.map((slide, index) => renderPicture(slide.picture, index))}
      </S.PicturesContainer>
      {hasLinks && (
        <S.NavigationContainer>{links.map(renderLink)}</S.NavigationContainer>
      )}
    </S.Container>
  )
}

export default Carousel
