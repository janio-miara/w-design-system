import React from 'react'
import styled from 'styled-components'

interface ParagraphProps {
  size?: 'x-small' | 'small' | 'medium' | 'large'
  as?: 'span' | 'div' | 'label' | 'p'
  color?: string
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  lineHeight?: string
  letterSpacing?: string
  margin?: string
  padding?: string
  children: React.ReactNode
  lightBod?: boolean
  semiBod?: boolean
  strongBod?: boolean
  heavyBod?: boolean
}

const sizes = {
  'x-small': '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
}

const weights = {
  lightBod: 400,
  semiBod: 600,
  strongBod: 700,
  heavyBod: 800,
}

const getFontWeight = (props: ParagraphProps) => {
  if (props.heavyBod) return weights.heavyBod
  if (props.strongBod) return weights.strongBod
  if (props.semiBod) return weights.semiBod
  return weights.lightBod
}

const ParagraphStyled = styled.p<ParagraphProps>`
  margin: ${({ margin = '0' }) => margin};
  padding: ${({ padding = '0' }) => padding};
  font-size: ${({ size = 'small' }) => sizes[size]};
  font-weight: ${props => getFontWeight(props)};
  line-height: ${({ lineHeight = '140%' }) => lineHeight};
  letter-spacing: ${({ letterSpacing = 'normal' }) => letterSpacing};
  font-family: 'Nunito Sans', sans-serif;
  color: ${({ color = 'inherit' }) => color};
  text-transform: ${({ textTransform = 'none' }) => textTransform};
  text-align: ${({ textAlign = 'left' }) => textAlign};
`

export const Paragraph: React.FC<ParagraphProps> = ({
  size = 'small',
  as = 'p',
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
      as={as}
      size={size}
      color={color}
      textTransform={textTransform}
      textAlign={textAlign}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      margin={margin}
      padding={padding}
      {...props}
    >
      {children}
    </ParagraphStyled>
  )
}
