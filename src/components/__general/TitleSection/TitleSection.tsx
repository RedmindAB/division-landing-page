import React, { FunctionComponent } from 'react'
import { Body1 } from '../../../theme/typography'
import * as S from './styled'

type Props = {
  title: string
  withoutRightPadding?: boolean
  background?: string
}

const TitleSection: FunctionComponent<Props> = ({
  title,
  children,
  withoutRightPadding,
  background,
}) => {
  return (
    <S.Container
      withoutRightPadding={withoutRightPadding}
      background={background}
    >
      <S.TitleContainer>
        <Body1 uppercase>{title}</Body1>
      </S.TitleContainer>
      <div>{children}</div>
    </S.Container>
  )
}

export default TitleSection
