import { useMediaQuery } from 'react-responsive'
import { mediaQueries } from '../theme/mediaBreakpoints'

const useIsMobile = () => {
  const isMobile = useMediaQuery({
    query: mediaQueries.mobile,
  })

  return isMobile
}

export default useIsMobile
