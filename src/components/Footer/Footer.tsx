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

const brandPartnerLogos = [
  require('../../assets/for-brand-logos/bramhults.png'),
  require('../../assets/for-brand-logos/carlsberg.png'),
  require('../../assets/for-brand-logos/childhood.png'),
  require('../../assets/for-brand-logos/livenation.png'),
  require('../../assets/for-brand-logos/loreal.png'),
  require('../../assets/for-brand-logos/norrsken.png'),
  require('../../assets/for-brand-logos/oatly.png'),
  require('../../assets/for-brand-logos/tretorn.png'),
  require('../../assets/for-brand-logos/tretorn_1891.png'),
  require('../../assets/for-brand-logos/uniqlo.png'),
  require('../../assets/for-brand-logos/westfield.png'),
]

const coLabLogos = [
  require('../../assets/co-lab-logos/foodstock.png'),
  require('../../assets/co-lab-logos/inhouse.png'),
  require('../../assets/co-lab-logos/stockholm-open.png'),
  require('../../assets/co-lab-logos/sven.png'),
  require('../../assets/co-lab-logos/d&d.png'),
]

const Footer = () => {
  return (
    <S.Container>
      <Spacer exact={50} />
      <Partners title="brands partners" logos={brandPartnerLogos} />
      <Spacer exact={50} />
      <Divider />
      <Spacer exact={20} />
      <Partners title="co:lab partners" logos={coLabLogos} />
      <Spacer exact={50} />
      {/* <Divider /> */}
      {/* <Spacer exact={20} />
      <Partners title="in partnership with" logos={[]} />
      <Spacer exact={50} /> */}
      <Spacer exact={200} mobile={100} />
      <NavigationContact />
      <Spacer exact={50} />
      <Divider />
      <Spacer exact={20} />
      <QuestionForm />
      <Spacer exact={50} />
      <Divider />
      <Spacer exact={20} />
      <Location />
      <Spacer exact={50} />
      {/* <Divider /> */}
      {/* <Spacer exact={20} /> */}
      <Social />
      <Spacer exact={50} />
    </S.Container>
  )
}

export default Footer
