import { Color, SizeText } from 'components/Types';
import * as Style from './styles';

export interface BadgeWordProps {
  text: string;
  color: Color;
  size: SizeText;
  outlined?: boolean;
  onClose?: (text: string) => void;
}
export function BadgeWord({ text, color, size, outlined, onClose, ...props }: BadgeWordProps) {
  return (
    <Style.Container $color={color} $size={size} $outlined={outlined} {...props}>
      {text}
      {onClose && (
        <button type="button" onClick={() => onClose(text)}>
          x
        </button>
      )}
    </Style.Container>
  );
}
