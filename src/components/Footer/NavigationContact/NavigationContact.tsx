import React from 'react'
import { Spacer } from '../../../theme/base'
import { Anchor, Body2 } from '../../../theme/typography'
import { Row } from '../styled'
import * as S from './styled'

type Props = {}

const NavigationContact = () => {
  return (
    <Row>
      <div>
        <Anchor href="#about">About</Anchor>
        <Spacer exact={10} />
        <Anchor href="#experiences">Experiences</Anchor>
        <Spacer exact={10} />
        <Anchor href="#brand-platforms">Brand platforms</Anchor>
        <Spacer exact={10} />
        <Anchor href="#brand-innovations">Brand innovations</Anchor>
      </div>
      <div>
        <Spacer exact={100} />
        <Body2>
          For press inquires contact
          <br />
          <S.Mail href="mailto:mattias.hamstedt@spgeve.se">
            <S.Underlined>mattias.hamst</S.Underlined>
            <span>edt@spgeve</span>
          </S.Mail>
          <br />
          <br />
          For new business enquiries contact
          <br />
          <S.Mail href="mailto:jessica.eriksson@spgevent.se">
            <S.Underlined>jessica.eriksso</S.Underlined>
            <span>n@spgevent.se</span>
          </S.Mail>
          <br />
          <br />
          For new concepts or a nice chat
          <br />
          <S.Mail href="mailto:dan.josefsson@spgevent.se">
            <S.Underlined>dan.josefs</S.Underlined>
            <span>son@spgevent.se</span>
          </S.Mail>
        </Body2>
      </div>
    </Row>
  )
}

export default NavigationContact
