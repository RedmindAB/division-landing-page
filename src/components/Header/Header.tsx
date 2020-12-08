import useScrollPosition from '@react-hook/window-scroll'
import { Link } from 'gatsby'
import React from 'react'
import LogoSmall from '../../assets/svg/LogoSmall'
import { Body2 } from '../../theme/typography'
import * as S from './styled'

type Props = {}

const Header = () => {
  const scrollY = useScrollPosition(60)
  const showBackground = scrollY > 0

  const getOnPressFn = (id: string) => () => {
    const scrollToElement = () => {
      const element = document.querySelector(id)

      if (element) {
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
        return true
      }

      return false
    }

    const isSuccessful = scrollToElement()

    if (!isSuccessful) {
      setTimeout(scrollToElement, 50)
    }
  }

  return (
    <S.Container showBackground={showBackground}>
      <LogoSmall />
      <div />
      <S.NavContainer>
        <Link to="/">
          <Body2 uppercase clickable onClick={getOnPressFn('#hero')}>
            Home
          </Body2>
        </Link>
        <Link to="/">
          <Body2 uppercase clickable onClick={getOnPressFn('#about')}>
            What
          </Body2>
        </Link>
        <Link to="/">
          <Body2 uppercase clickable onClick={getOnPressFn('#experiences')}>
            How
          </Body2>
        </Link>
        <Link to="/">
          <Body2 uppercase clickable onClick={getOnPressFn('#brand-platforms')}>
            Work
          </Body2>
        </Link>
        <Link to="/">
          <Body2
            uppercase
            clickable
            onClick={getOnPressFn('#brand-innovations')}
          >
            Lab
          </Body2>
        </Link>
        <Link to="/showcase">
          <Body2 uppercase clickable style={{ color: 'var(--accent)' }}>
            Showcase
          </Body2>
        </Link>
      </S.NavContainer>
    </S.Container>
  )
}

export default Header
