import * as Style from './styles';
import { Color } from '../Types';

export interface DivisorProps {
  orientation: 'vertical' | 'horizontal';
  size: '0.7px' | '1px' | '1.5px' | '2px';
  color?: Color;
}

export function Divisor({ size, color, ...props }: DivisorProps) {
  const { orientation } = props;
  return (
    <span>
      {orientation === 'vertical' ? (
        <Style.ContainerVertical $size={size} $color={color} {...props} />
      ) : (
        <Style.ContainerHorizontal $size={size} $color={color} {...props} />
      )}
    </span>
  );
}
