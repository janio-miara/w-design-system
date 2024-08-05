import React from 'react'
import styled from 'styled-components'
import { theme } from '../Themes'

interface ParagraphProps {
  size: 'medium' | 'large'
  bold?: boolean
  as?: 'h1' | 'h2' | 'h3'
  color?: string // Adicionando a propriedade color
  children: React.ReactNode
}

const sizes = {
  ...theme.title,
}

const TitleStyled = styled.p<ParagraphProps>`
  margin: 0;
  padding: 0;
  font-size: ${props => sizes[props.size]};
  font-weight: ${props => (props.bold ? 800 : 400)};
  line-height: 130%;
  font-family: 'Nunito Sans', sans-serif;
  color: ${props => props.color || 'inherit'}; // Aplicando a cor
`

export const Title: React.FC<ParagraphProps> = ({ size = 'medium', bold, as = 'h2', color, children }) => {
  return (
    <TitleStyled as={as} size={size} bold={bold} color={color}>
      {children}
    </TitleStyled>
  )
}
