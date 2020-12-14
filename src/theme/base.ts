import styled, { css } from 'styled-components'
import { breakpoints } from './mediaBreakpoints'

export type PropStylingConfig = { [key: string]: string | boolean }
export type PropStylingProps = { [key: string]: boolean }

export function propConditionalStyling(key, map) {
  return (props) => {
    if (!props[key]) return ''
    return map[props[key]]
  }
}

export function propStyling<T = PropStylingConfig>(config: T) {
  return (props: PropStylingProps) => {
    return Object.keys(props)
      .reduce(
        (acc, curr) =>
          config[curr] && !!props[curr] ? `${acc}${config[curr]};\n` : acc,
        ''
      )
      .trim()
  }
}

function getSpacing(propChar: string) {
  return (props: { [key: string]: boolean | number }) => {
    if (props.exact) return props.exact

    const propKeys = Object.keys(props)
    const spacingProp = propKeys.find((p) => p[0] === propChar)

    if (!spacingProp) return 0

    const spacingValue = +spacingProp.substr(1)

    if (spacingValue % 4 !== 0) return 0

    return Math.round(spacingValue)
  }
}

export const Spacer = styled.div<{
  exact?: number
  h04?: boolean
  h08?: boolean
  h12?: boolean
  h16?: boolean
  h20?: boolean
  h24?: boolean
  h28?: boolean
  h32?: boolean
  h36?: boolean
  h40?: boolean
  h44?: boolean
  h48?: boolean
  w04?: boolean
  w08?: boolean
  w12?: boolean
  w16?: boolean
  w20?: boolean
  w24?: boolean
  w28?: boolean
  w32?: boolean
  w36?: boolean
  w40?: boolean
  w44?: boolean
  w48?: boolean
  mobile?: number
}>`
  height: ${getSpacing('h') as any}px;
  width: ${getSpacing('w') as any}px;

  ${({ mobile }) =>
    mobile &&
    `
    ${breakpoints.mobile} {
      height: ${getSpacing('h')({ exact: mobile }) as any}px;
    }
  `}
`

export const TextContainer = styled.div<{ width: string; mobile?: string }>`
  width: ${({ width }) => width};
  max-width: 90vw;

  ${({ mobile }) =>
    mobile &&
    `
    ${breakpoints.mobile} {
      width: ${mobile};
    }
  `}
`

export const hrefHover = css`
  cursor: pointer;

  &:hover {
    color: var(--accent);
  }
`

export const ShowMobile = styled.span`
  display: none;

  ${breakpoints.mobile} {
    display: initial;
  }
`

export const SectionContainer = styled.di
