import React from 'react'
import { Spacer } from '../../../theme/base'
import { Body2 } from '../../../theme/typography'
import * as S from './styled'

type Props = {}

const Social = () => {
  const year = new Date().getFullYear()

  return (
    <S.Container>
      <div>
        <Body2>Instagram</Body2>
        <Spacer exact={10} />
        <Body2>Facebook</Body2>
        <Spacer exact={10} />
        <Body2>Twitter</Body2>
      </div>
      <div>
        <Body2>Stureplansgruppen's policies</Body2>
      </div>
      <div>
        <Body2 style={{ opacity: 0.3 }}>@{year} DIVISION.</Body2>
      </div>
    </S.Container>
  )
}

export default Social
