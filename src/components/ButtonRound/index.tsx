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
  ...props
}) => (
  <ButtonStyled variant={variant} disabled={disabled} outline={outline} badge={badge} {...props}>
    {badge && <span className={'buttonRoundBadge'}>{badge}</span>}
    <IconWrapper
      src={icon || ''}
      color={'white'}
      width={'20px'}
      height={'20px'}
      className={'buttonRadiusWrapperIcon'}
    />
  </ButtonStyled>
)
