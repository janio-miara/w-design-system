import { Color, SizeText } from 'components/Types';
import { PTag, H1Tag, H2Tag, H3Tag, H4Tag, SpanTag } from './styles';
import { PropsWithChildren } from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: Color;
  element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  size?: SizeText;
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  bold?: boolean;
  lighter?: boolean;
}

export function Text({
  color,
  children,
  element,
  size,
  transform,
  bold,
  lighter,
  ...props
}: PropsWithChildren<TextProps>) {
  if (element === 'h1') {
    return (
      <H1Tag $color={color} $size={size} $transform={transform} $bold={bold} $lighter={lighter} {...props}>
        {children}
      </H1Tag>
    );
  }

  if (element === 'h2') {
    return (
      <H2Tag $color={color} $size={size} $transform={transform} $bold={bold} $lighter={lighter} {...props}>
        {children}
      </H2Tag>
    );
  }

  if (element === 'h3') {
    return (
      <H3Tag $color={color} $size={size} $transform={transform} $bold={bold} $lighter={lighter} {...props}>
        {children}
      </H3Tag>
    );
  }

  if (element === 'h4') {
    return (
      <H4Tag $color={color} $size={size} $transform={transform} $bold={bold} $lighter={lighter} {...props}>
        {children}
      </H4Tag>
    );
  }
  if (element === 'p') {
    return (
      <PTag $color={color} $size={size} $transform={transform} $bold={bold} $lighter={lighter} {...props}>
        {children}
      </PTag>
    );
  }
  return (
    <SpanTag $color={color} $size={size} $transform={transform} $bold={bold} $lighter={lighter} {...props}>
      {children}
    </SpanTag>
  );
}
