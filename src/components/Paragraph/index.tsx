import React from 'react'
import styled from 'styled-components'

interface ParagraphProps {
  size?: 'x-small' | 'small' | 'medium' | 'large'
  as?: 'span' | 'div' | 'label' | 'p'
  color?: string
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
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
  margin: 0;
  padding: 0;
  font-size: ${({ size = 'small' }) => sizes[size]};
  font-weight: ${props => getFontWeight(props)};
  line-height: 140%;
  font-family: 'Nunito Sans', sans-serif;
  color: ${({ color = 'inherit' }) => color};
  text-transform: ${({ textTransform = 'none' }) => textTransform};
`

export const Paragraph: React.FC<ParagraphProps> = ({
  size = 'small',
  as = 'p',
  color = 'inherit',
  textTransform = 'none',
  children,
  ...props
}) => {
  return (
    <ParagraphStyled as={as} size={size} color={color} textTransform={textTransform} {...props}>
      {children}
    </ParagraphStyled>
  )
}
