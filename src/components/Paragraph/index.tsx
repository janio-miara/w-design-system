import React from 'react'
import styled from 'styled-components'

interface ParagraphProps {
  size?: 'x-small' | 'small' | 'medium' | 'large'
  weight?: 400 | 600 | 700 | 800
  as?: 'span' | 'div' | 'label' | 'p'
  color?: string
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' // Adicionando a propriedade textTransform
  children: React.ReactNode
}

const sizes = {
  'x-small': '12px',
  small: '14px',
  medium: '16px',
  large: '18px',
}

const weights = {
  400: 400,
  600: 600,
  700: 700,
  800: 800,
}

const ParagraphStyled = styled.p<ParagraphProps>`
  margin: 0;
  padding: 0;
  font-size: ${props => sizes[props.size || 'small']};
  font-weight: ${props => (props.weight ? weights[props.weight] : 400)};
  line-height: 140%;
  font-family: 'Nunito Sans', sans-serif;
  color: ${props => props.color || 'inherit'};
  text-transform: ${props => props.textTransform || 'none'}; // Aplicando textTransform
`

export const Paragraph: React.FC<ParagraphProps> = ({
  size = 'small',
  weight,
  as = 'p',
  color,
  textTransform,
  children,
}) => {
  return (
    <ParagraphStyled as={as} size={size} weight={weight} color={color} textTransform={textTransform}>
      {children}
    </ParagraphStyled>
  )
}
