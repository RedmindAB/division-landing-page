import React from 'react'
import { Spacer } from '../../theme/base'
import Divider from '../__general/Divider'
import Location from './Location'
import NavigationContact from './NavigationContact'
import Premises from './Premises'
import Social from './Social'
import * as S from './styled'

type Props = {}

const Footer = () => {
  return (
    <S.Container>
      <Spacer exact={20} />
      <NavigationContact />
      <Spacer exact={50} />
      <Divider />
      <Spacer exact={20} />
      <Location />
      <Spacer exact={50} />
      <Divider />
      <Spacer exact={20} />
      <Premises />
      <Spacer exact={50} />
      <Spacer exact={20} />
      <Social />
      <Spacer exact={50} mobile={20} />
    </S.Container>
  )
}

export default Footer
