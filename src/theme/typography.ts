import { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import fonts from './fonts'

export type ThemeColorProps = {
  primary?: boolean | string
  primaryLight?: boolean | string
  secondary?: boolean | string
  accent?: boolean | string
  primaryVariant?: boolean | string
}

export type TypographyProps = {
  light?: boolean | string
  centered?: boolean | string
  uppercase?: boolean | string
  lowercase?: boolean | string
  underline?: boolean | string
  color?: string
  fontSize?: number
  as?: any
  bold?: boolean
} & ThemeColorProps

const typographyBase = css`
  color: var(--foreground);
`

const typographyProps = css<TypographyProps>`
  ${({ uppercase }) => uppercase && 'text-transform: uppercase'}
`

export type TypographyComponent<T = {}> = FunctionComponent<TypographyProps & T>

export const Title1 = styled.h1<TypographyProps>`
  ${typographyBase}
  font-family: ${fonts.title.condensedBold};
  font-size: 11rem;
  letter-spacing: 0.4rem;
  line-height: 9rem;
  ${typographyProps}
`

export const Title2 = styled.h2<TypographyProps>`
  ${typographyBase}
  font-family: ${fonts.title.condensedBold};
  font-size: 6rem;
  letter-spacing: -0.3rem;
  line-height: 6rem;
  ${typographyProps}
`

export const Headline1 = styled.h1<TypographyProps>`
  ${typographyBase}
  font-family: ${fonts.headline.condensedLight};
  font-size: 3.6rem;
  letter-spacing: -0.1rem;
  ${typographyProps}
`

export const Headline2 = styled.h2<TypographyProps>`
  ${typographyBase}
  font-family: ${fonts.headline.condensedBold};
  font-size: 2.4rem;
  line-height: 3rem;
  letter-spacing: -0.1rem;
  ${typographyProps}
`

export const Body1 = styled.p<TypographyProps>`
  ${typographyBase}
  font-family: ${fonts.body.condensedLight};
  font-size: 2.4rem;
  line-height: 2.9rem;
  ${typographyProps}
`

export const Body2 = styled.p<TypographyProps>`
  ${typographyBase}
  font-family: ${fonts.body.condensedLight};
  font-size: 1.6rem;
  line-height: 2rem;
  ${typographyProps}
`
