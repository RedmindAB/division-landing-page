import React from 'react'
import { Body1, Body2 } from '../../../theme/typography'
import { Row } from '../styled'
import * as S from './styled'

type Props = {}

const Premises = () => {
  return (
    <Row>
      <Body1>Premises</Body1>
      <div>
        <Body2>PUSH</Body2>
        <Body2>GARDEN</Body2>
        <Body2>THE WALL</Body2>
        <Body2>HELL'S KITCHEN</Body2>
        <Body2>SPYBAR</Body2>
        <Body2>LASTKJEN</Body2>
      </div>
      <div>
        <Body2>NOSH AND CHOW</Body2>
        <Body2>CABARET</Body2>
        <Body2>CHINA TEATERN</Body2>
        <Body2>BERNS</Body2>
        <Body2>BANK HOTEL</Body2>
        <Body2>L'AVVENTURA</Body2>
      </div>
    </Row>
  )
}

export default Premises
