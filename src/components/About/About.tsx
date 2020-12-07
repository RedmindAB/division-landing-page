import React from 'react'
import { TextContainer } from '../../theme/base'
import { Body1, Title1 } from '../../theme/typography'
import TitleSection from '../__general/TitleSection/TitleSection'

type Props = {}

const About = () => {
  return (
    <TitleSection title="about us" id="about">
      <TextContainer width="85%">
        <Title1 uppercase>
          By fusing creativity and technical innovation together, we leave
          'ordinary' behind and create on-brand innovation platforms.
        </Title1>
      </TextContainer>
      <TextContainer width="650px">
        <Body1>
          We share your challenges and ambitions, we understand what you need,
          and together we build brand platforms with lasting value and smart
          ideas.
          <br />
          <br />
          Advanced technologies offer the opportunity to make meetings and
          events that are engaging, strategy-driven, sustainable, and more
          impactful thane ver before.
        </Body1>
      </TextContainer>
    </TitleSection>
  )
}

export default About
