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
    {...props}
  >
    {icon && <IconWrapper src={icon} color={'white'} className={'buttonRadiusWrapperIcon'} />}
    {children}
  </ButtonStyled>
)
