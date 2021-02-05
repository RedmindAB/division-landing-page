import React from 'react'
import { Spacer } from '../../theme/base'
import QuestionForm from './QuestionForm'
import Divider from '../__general/Divider'
import Location from './Location'
import NavigationContact from './NavigationContact'
import Partners from './Partners'
import Social from './Social'
import * as S from './styled'

type Props = {}

const Footer = () => {
  return (
    <S.Container>
      <Partners title="brands partners" />
      <Spacer exact={50} />
      <Divider />
      <Spacer exact={20} />
      <Partners title="co:lab partners" />
      <Spacer exact={50} />
      <Divider />
      <Spacer exact={20} />
      <Partners title="in partnership with" />
      <Spacer exact={50} />
      <Spacer exact={200} />
      <NavigationContact />
      <Spacer exact={50} />
      <Divider />
      <Spacer exact={20} />
      <Location />
      <Spacer exact={50} />
      <Divider />
      <Spacer exact={20} />
      <QuestionForm />
      <Spacer exact={50} />
      <Divider />
      <Spacer exact={20} />
      <Social />
    </S.Container>
  )
}

export default Footer
