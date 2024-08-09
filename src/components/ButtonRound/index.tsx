import React from 'react'
import { IconWrapper } from '../IconWrapper'
import { ButtonStyled } from './styles'
import { ButtonRoundTypes } from '../Types'

export const ButtonRound: React.FC<ButtonRoundTypes> = ({
  variant = 'primary',
  children,
  disabled = false,
  icon,
  outline,
  badge,
  size = 'medium',
  ...props
}) => (
  <ButtonStyled variant={variant} disabled={disabled} outline={outline} badge={badge} size={size} {...props}>
    {badge && size === 'medium' && <span className={'buttonRoundBadge'}>{badge}</span>}
    <IconWrapper
      src={icon || ''}
      color={'white'}
      width={size === 'small' ? '16px' : '20px'}
      height={size === 'small' ? '16px' : '20px'}
      className={'buttonRadiusWrapperIcon'}
    />
  </ButtonStyled>
)
