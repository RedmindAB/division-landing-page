import React, { FunctionComponent } from 'react'
import { Initiatives } from '../../data/projects'
import { Body1, Title1 } from '../../theme/typography'
import * as S from './styled'
import './typewriter.css'

type Props = {
  initiatives: Initiatives[]
}

const PicturesGrid: FunctionComponent<Props> = ({ initiatives }) => {
  const renderPicture = (
    { image, title, body }: Initiatives,
    index: number
  ) => (
    <S.Picture url={image} key={index}>
      <S.Backdrop>
        <S.BackdropContent>
          <Title1 uppercase>{title}</Title1>
          {body && <Body1>{body}</Body1>}
        </S.BackdropContent>
      </S.Backdrop>
    </S.Picture>
  )

  return <S.Container>{initiatives.map(renderPicture)}</S.Container>
}

export default PicturesGrid
