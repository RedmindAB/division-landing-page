import React, { FunctionComponent } from 'react'
import * as S from './styled'
import Masonry from 'react-masonry-css'

type Props = {
  pictures: string[]
}

const PicturesGrid: FunctionComponent<Props> = ({ pictures }) => {
  const renderPicture = (src: string, index: number) => (
    <img src={src} key={index} />
  )

  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {pictures.map(renderPicture)}
    </Masonry>
  )
}

export default PicturesGrid
