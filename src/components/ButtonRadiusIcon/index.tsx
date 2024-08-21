import React from 'react'
import { IconWrapper } from '../IconWrapper'
import { ButtonStyled } from './styles'
import { ButtonRadiusIconTypes } from '../Types'

export const ButtonRadiusIcon: React.FC<ButtonRadiusIconTypes> = ({
  variant = 'primary',
  children,
  disabled = false,
  icon,
  subTitle,
  size,
  ...props
}) => (
  <ButtonStyled variant={variant} disabled={disabled} subTitle={subTitle} {...props} size={size}>
    <span className={'buttonRadiusIconContainer'}>
      {children} {subTitle && <p className={'buttonRadiusIconTitle'}>{subTitle}</p>}
    </span>
    <span className={'buttonRadiusIconWrapperIcon'}>
      <IconWrapper
        src={icon || ''}
        color={'white'}
        className={'buttonRadiusWrapperIcon'}
        width={size !== 'large' ? '20px' : '24px'}
        height={size !== 'large' ? '20px' : '24px'}
      />
    </span>
  </ButtonStyled>
)
