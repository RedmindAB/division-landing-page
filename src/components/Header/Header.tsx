import { Link } from 'gatsby'
import React, { Fragment, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Hamburger from '../../assets/svg/Hamburger'
import LogoSmall from '../../assets/svg/LogoSmall'
import { projects } from '../../data/projects'
import { Spacer } from '../../theme/base'
import { mediaQueries } from '../../theme/mediaBreakpoints'
import {
  Body1,
  Headline2,
  Outlined,
  Title1,
  Title2,
} from '../../theme/typography'
import { Mail } from '../Footer/NavigationContact/styled'
import * as S from './styled'

type Props = {}

type Route = {
  title: string
  id: string
  outline?: boolean
}

export type AnimationState = 'hidden' | 'animate-in' | 'animate-out'

const homePageRoutes: Route[] = [
  {
    title: 'Home',
    id: '#hero',
    outline: true,
  },
  {
    title: 'About us',
    id: '#about',
  },
  {
    title: 'What we do',
    id: '#brand-platforms',
  },
  {
    title: 'How we Innovate',
    id: '#brand-innovations',
  },
]

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const [animationState, setAnimationState] = useState('hidden')
  const isMobile = useMediaQuery({
    query: mediaQueries.mobile,
  })

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

  useEffect(() => {
    document.body.style.overflow = showDrawer ? 'hidden' : 'initial'
  }, [showDrawer])

  const toggleDrawer = () => {
    const newState = !showDrawer
    setShowDrawer(newState)
    setAnimationState(newState ? 'animate-in' : 'animate-out')
  }
  const MenuTypography = isMobile ? Title2 : Title1

  return (
    <>
      {showDrawer && (
        <S.Overlay>
          <S.DrawerBackdrop>
            <S.InfoContainer>
              <div>
                <Body1>START A CONVERSATION</Body1>
                <Body1>
                  <Mail
                    href="mailto:dan.josefsson@division.se"
                    style={{ textDecoration: 'underline' }}
                  >
                    DAN.JOSEFSSON@DIVISION.SE
                  </Mail>
                </Body1>
              </div>
              <div />
              <div>
                <Headline2>DISRUPT</Headline2>
                <Spacer exact={10} />
                <Body1>Let's create tomorrow together.</Body1>
                <Spacer exact={10} />
                <Body1>
                  <a
                    href="https://redmind.se/"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: 'underline' }}
                  >
                    dreamers apply here
                  </a>
                </Body1>
              </div>
              <div>
                <Headline2>STOCKHOLM</Headline2>
                <Spacer exact={10} />
                <Body1>
                  STUREGATAN 4, 2 TR
                  <br />
                  BOX 55719
                  <br />
                  114 35 STOCKHOLM
                </Body1>
                <Spacer exact={10} />
                <Body1>+46 8 791 40 10</Body1>
              </div>
            </S.InfoContainer>
            <S.DrawerMenu>
              <span onClick={toggleDrawer}>
                {homePageRoutes.map((route) => {
                  const Wrapper = route.outline ? Outlined : Fragment
                  return (
                    <Link to="/">
                      <MenuTypography
                        uppercase
                        clickable
                        onClick={getOnPressFn(route.id)}
                      >
                        <Wrapper>{route.title}</Wrapper>
                      </MenuTypography>
                    </Link>
                  )
                })}
                <Link to={`/showcase/${projects[0].slug}`}>
                  <MenuTypography uppercase clickable>
                    Work
                  </MenuTypography>
                </Link>
              </span>
            </S.DrawerMenu>
          </S.DrawerBackdrop>
        </S.Overlay>
      )}
      <S.Container showBackground={false}>
        <LogoSmall />
        {isMobile && (
          <div
            onClick={toggleDrawer}
            style={{ padding: '1rem', marginTop: '2px', marginLeft: '1rem' }}
          >
            <Hamburger />
          </div>
        )}
        {!isMobile && (
          <S.NavContainer>
            <S.DrawerIcon onClick={toggleDrawer}>
              <S.DrawerLine crossOne={showDrawer} />
              <S.DrawerLine crossTwo={showDrawer} />
              <S.DrawerLine crossThree={showDrawer} />
            </S.DrawerIcon>
          </S.NavContainer>
        )}
      </S.Container>
    </>
  )
}

export default Header
