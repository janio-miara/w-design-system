import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { ReactSVG } from 'react-svg'

interface IconWrapperProps {
  src: string
  color?: string
  width?: string
  height?: string
  className?: string
  onClick?: () => void
  loading?: boolean
}

interface StyledIconWrapperProps {
  color?: string
  width?: string
  height?: string
  clickable?: boolean
  loading?: boolean
}

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const StyledIconWrapper = styled.div<StyledIconWrapperProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};

  svg {
    width: ${({ width }) => width || '24px'};
    height: ${({ height }) => height || '24px'};
    fill: ${({ color }) => color || 'black'};

    ${({ loading }) =>
      loading &&
      css`
        animation: ${css`
            ${spinAnimation}`} 2s linear infinite;
      `}

    path {
      fill: ${({ color }) => color || 'black'};
    }
  }
`

export const IconWrapper: React.FC<IconWrapperProps> = ({ src, color, width, height, className, onClick, loading }) => (
  <StyledIconWrapper
    color={color}
    width={width}
    height={height}
    className={className}
    clickable={!!onClick}
    loading={loading}
    onClick={onClick}
  >
    <ReactSVG src={src} />
  </StyledIconWrapper>
)
