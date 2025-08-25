import { StyledButtonRadius } from './styles';
import { Color, SizeBasic } from '../Types/index';

export interface ButtonRadiusProps {
  outlined?: boolean;
  color?: Color;
  onClick?: () => void;
  disabled?: boolean;
  size?: SizeBasic;
  icon?: React.ReactNode;
}

export function ButtonRadius({ outlined, color, disabled, size, icon, ...props }: ButtonRadiusProps) {
  return (
    <StyledButtonRadius $outlined={outlined} $color={color} $disabled={disabled} $size={size} {...props}>
      {icon}
    </StyledButtonRadius>
  );
}
