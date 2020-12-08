import React from 'react'
import { Spacer, TextContainer } from '../../theme/base'
import { Body1, Title1 } from '../../theme/typography'
import TitleSection from '../__general/TitleSection/TitleSection'
import Zoom from 'react-reveal/Zoom'

type Props = {}

const About = () => {
  return (
    <TitleSection title="about us" id="about">
      <Zoom>
        <div className="title-section-content">
          <TextContainer width="85%">
            <Title1 uppercase>
              By fusing creativity and technical innovation together, we leave
              'ordinary' behind and create on-brand innovation platforms.
            </Title1>
          </TextContainer>
          <Spacer exact={60} />
          <TextContainer width="650px">
            <Body1>
              We share your challenges and ambitions, we understand what you
              need, and together we build brand platforms with lasting value and
              smart ideas.
              <br />
              <br />
              Advanced technologies offer the opportunity to make meetings and
              events that are engaging, strategy-driven, sustainable, and more
              impactful thane ver before.
            </Body1>
          </TextContainer>
        </div>
      </Zoom>
    </TitleSection>
  )
}

export default About
