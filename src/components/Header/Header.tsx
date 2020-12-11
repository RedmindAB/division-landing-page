import useScrollPosition from '@react-hook/window-scroll'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Hamburger from '../../assets/svg/Hamburger'
import LogoSmall from '../../assets/svg/LogoSmall'
import { projects } from '../../data/projects'
import { mediaQueries } from '../../theme/mediaBreakpoints'
import { Body2, Headline2 } from '../../theme/typography'
import * as S from './styled'

type Props = {}

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const isMobile = useMediaQuery({
    query: mediaQueries.mobile,
  })
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

  const toggleDrawer = () => setShowDrawer(!showDrawer)

  return (
    <>
      {isMobile && showDrawer && (
        <S.DrawerMenu>
          <span onClick={toggleDrawer}>
            <Link to="/">
              <Headline2 uppercase clickable onClick={getOnPressFn('#hero')}>
                Home
              </Headline2>
            </Link>
            <Link to="/">
              <Headline2 uppercase clickable onClick={getOnPressFn('#about')}>
                What
              </Headline2>
            </Link>
            <Link to="/">
              <Headline2
                uppercase
                clickable
                onClick={getOnPressFn('#experiences')}
              >
                How
              </Headline2>
            </Link>
            <Link to="/">
              <Headline2
                uppercase
                clickable
                onClick={getOnPressFn('#brand-platforms')}
              >
                Work
              </Headline2>
            </Link>
            <Link to="/">
              <Headline2
                uppercase
                clickable
                onClick={getOnPressFn('#brand-innovations')}
              >
                Lab
              </Headline2>
            </Link>
            <Link to={`showcase/${projects[0].slug}`}>
              <Headline2 uppercase clickable style={{ color: 'var(--accent)' }}>
                Showcase
              </Headline2>
            </Link>
          </span>
        </S.DrawerMenu>
      )}
      <S.Container showBackground={showDrawer || showBackground}>
        {isMobile && (
          <div
            onClick={toggleDrawer}
            style={{ padding: '1rem', marginTop: '2px', marginLeft: '-1rem' }}
          >
            <Hamburger />
          </div>
        )}
        <LogoSmall />
        <div />
        {!isMobile && (
          <S.NavContainer>
            <>
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
                <Body2
                  uppercase
                  clickable
                  onClick={getOnPressFn('#experiences')}
                >
                  How
                </Body2>
              </Link>
              <Link to="/">
                <Body2
                  uppercase
                  clickable
                  onClick={getOnPressFn('#brand-platforms')}
                >
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
              <Link to={`showcase/${projects[0].slug}`}>
                <Body2 uppercase clickable style={{ color: 'var(--accent)' }}>
                  Showcase
                </Body2>
              </Link>
            </>
          </S.NavContainer>
        )}
      </S.Container>
    </>
  )
}

export default Header
