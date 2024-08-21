import React from 'react'
import { IconWrapper } from '../IconWrapper'
import { ButtonStyled } from './styles'
import { ButtonTypes } from '../Types'

export const Button: React.FC<ButtonTypes> = ({
  variant = 'primary',
  children,
  disabled = false,
  icon,
  radius,
  outline,
  halfLeft,
  halfRight,
  fullWidth,
  size,
  ...props
}) => (
  <ButtonStyled
    variant={variant}
    disabled={disabled}
    radius={radius}
    outline={outline}
    halfLeft={halfLeft}
    halfRight={halfRight}
    fullWidth={fullWidth}
    size={size}
    {...props}
  >
    {icon && (
      <IconWrapper
        src={icon}
        color={'white'}
        className={'buttonRadiusWrapperIcon'}
        width={size !== 'large' ? '20px' : '24px'}
        height={size !== 'large' ? '20px' : '24px'}
      />
    )}
    {children}
  </ButtonStyled>
)
