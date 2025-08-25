import { ColorsVariant } from 'components/Types';
import { IconWrapper } from '../IconWrapper';
import { ButtonStyled } from './styles';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonRoundProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorsVariant;
  icon?: string;
  badge?: number;
  size?: 'small' | 'medium';
}

export function ButtonRound({
  variant = 'primary',
  disabled = false,
  icon,
  badge,
  size = 'medium',
  ...props
}: ButtonRoundProps) {
  return (
    <ButtonStyled $variant={variant} disabled={disabled} $size={size} {...props}>
      {badge && size === 'medium' && <span className={'buttonRoundBadge'}>{badge}</span>}
      <IconWrapper
        src={icon || ''}
        color={'white'}
        width={size === 'small' ? '16px' : '20px'}
        height={size === 'small' ? '16px' : '20px'}
        className={'buttonRadiusWrapperIcon'}
      />
    </ButtonStyled>
  );
}
