import React from 'react'
import { Spacer } from '../../../theme/base'
import { Anchor, Body2 } from '../../../theme/typography'
import * as S from './styled'

type Props = {}

const Social = () => {
  const year = new Date().getFullYear()

  return (
    <S.Container>
      <div>
        <Anchor
          href="https://www.instagram.com/stureplansgruppen/"
          target="_blank"
          rel="noopener"
        >
          Instagram
        </Anchor>
        <Spacer exact={10} />
        <Anchor
          href="https://www.facebook.com/stureplansgruppen/"
          target="_blank"
          rel="noopener"
        >
          Facebook
        </Anchor>
        <Spacer exact={10} />
        <Anchor
          href="https://twitter.com/stureplansgrupp"
          target="_blank"
          rel="noopener"
        >
          Twitter
        </Anchor>
      </div>
      <div>
        <Body2>Stureplansgruppen's policies</Body2>
      </div>
      <div>
        <Body2 style={{ opacity: 0.6 }}>@{year} DIVISION.</Body2>
      </div>
    </S.Container>
  )
}

export default Social
