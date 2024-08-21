import React from 'react'
import { IconWrapper } from '../IconWrapper'
import { ButtonStyled } from './styles'
import { ButtonTypes } from '../Types'
import { spinSVG } from '../../assets/icon'
import { theme } from '../Themes'
const { colors } = theme

const handleColorLoading = (variante: string) => {
  if (variante === 'primary') {
    return colors.cyan50
  }
  if (variante === 'primary') {
    return colors.cyan50
  }
  if (variante === 'secondary') {
    return colors.cyan30
  }
  if (variante === 'danger') {
    return colors.red40
  }
  if (variante === 'warning') {
    return colors.honey30
  }
  if (variante === 'gray') {
    return colors.shade30
  }
  if (variante === 'success') {
    return colors.mint40
  }
  if (variante === 'yellow') {
    return colors.yellow30
  }
  return colors.cyan50
}

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
  loading,
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
    {loading && <IconWrapper src={spinSVG} loading color={outline ? handleColorLoading(variant) : 'white'} />}
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
