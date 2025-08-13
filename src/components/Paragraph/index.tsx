import React from 'react'
import styled from 'styled-components'

interface ParagraphProps {
  children: React.ReactNode
  color?: string
  heavyBold?: boolean
  letterSpacing?: string
  lightBold?: boolean
  lineHeight?: string
  margin?: string
  padding?: string
  semiBold?: boolean
  size?: 'x-small' | 'small' | 'medium' | 'large'
  strongBold?: boolean
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}

const sizes = {
  'x-small': '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
}

const weights = {
  lightBold: 400,
  semiBold: 600,
  strongBold: 700,
  heavyBold: 800,
}

export interface FontWeightProps {
  $heavyBold?: boolean
  $semiBold?: boolean
  $strongBold?: boolean
  $lightBold?: boolean
}

const getFontWeight = (props: FontWeightProps) => {
  if (props.$heavyBold) return weights.heavyBold
  if (props.$strongBold) return weights.strongBold
  if (props.$semiBold) return weights.semiBold
  return weights.lightBold
}

export interface StyledParagraphProps {
  $color?: string
  $heavyBold?: boolean
  $letterSpacing?: string
  $lightBold?: boolean
  $lineHeight?: string
  $margin?: string
  $padding?: string
  $semiBold?: boolean
  $size?: 'x-small' | 'small' | 'medium' | 'large'
  $strongBold?: boolean
  $textAlign?: 'left' | 'center' | 'right' | 'justify'
  $textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}

const ParagraphStyled = styled.p<StyledParagraphProps>`
  margin: ${({ $margin = '0' }) => $margin};
  padding: ${({ $padding = '0' }) => $padding};
  font-size: ${({ $size = 'small' }) => sizes[$size]};
  font-weight: ${props => getFontWeight(props)};
  line-height: ${({ $lineHeight = '140%' }) => $lineHeight};
  letter-spacing: ${({ $letterSpacing = 'normal' }) => $letterSpacing};
  font-family: 'Nunito Sans', sans-serif;
  color: ${({ $color = 'inherit' }) => $color};
  text-transform: ${({ $textTransform = 'none' }) => $textTransform};
  text-align: ${({ $textAlign = 'left' }) => $textAlign};
`

export const Paragraph: React.FC<ParagraphProps> = ({
  size = 'small',
  color = 'inherit',
  textTransform = 'none',
  textAlign = 'left',
  lineHeight = '140%',
  letterSpacing = 'normal',
  margin = '0',
  padding = '0',
  children,
  ...props
}) => {
  return (
    <ParagraphStyled
      $color={color}
      $letterSpacing={letterSpacing}
      $lineHeight={lineHeight}
      $margin={margin}
      $padding={padding}
      $size={size}
      $textAlign={textAlign}
      $textTransform={textTransform}
      $heavyBold={props.heavyBold}
      $semiBold={props.semiBold}
      $strongBold={props.strongBold}
      $lightBold={props.lightBold}
      {...props}
    >
      {children}
    </ParagraphStyled>
  )
}
