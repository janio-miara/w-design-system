import { ButtonHTMLAttributes } from 'react';
import { IconWrapper } from '../IconWrapper';
import { StyledButton } from './styles';
import { ColorsVariant } from '../Types';

export interface ButtonRadiusIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorsVariant;
  icon?: string;
  subTitle?: string;
  size?: 'small' | 'medium' | 'large';
}

export function ButtonRadiusIcon({
  variant = 'primary',
  children,
  disabled = false,
  icon,
  subTitle,
  size,
  ...props
}: ButtonRadiusIconProps) {
  return (
    <StyledButton $variant={variant} disabled={disabled} $size={size} {...props}>
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
    </StyledButton>
  );
}
