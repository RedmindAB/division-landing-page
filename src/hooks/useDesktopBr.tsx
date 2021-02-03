import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { mediaQueries } from '../theme/mediaBreakpoints'

const useDesktopBr = () => {
  const isMobile = useMediaQuery({
    query: mediaQueries.mobile,
  })

  if (isMobile) {
    return ' '
  }

  return <br />
}
export default useDesktopBr
