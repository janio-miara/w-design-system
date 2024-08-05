import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

interface IconWrapperProps {
  src: string
  color?: string
  width?: string
  height?: string
  className?: string
  onClick?: () => void
}

interface IconWrappeProps {
  color?: string
  width?: string
  height?: string
  onClick?: () => void
}

const StyledIconWrapper = styled.div<IconWrappeProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  svg {
    width: ${props => props.width || '24px'};
    height: ${props => props.height || '24px'};
    fill: ${props => props.color || 'black'};

    path {
      fill: ${props => props.color || 'black'};
    }
  }
`

export const IconWrapper: React.FC<IconWrapperProps> = ({ src, color, width, height, className, onClick }) => (
  <StyledIconWrapper color={color} width={width} height={height} className={className} onClick={onClick}>
    <ReactSVG src={src} />
  </StyledIconWrapper>
)
