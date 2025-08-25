import { SizeText } from 'components/Types';
import { StyledTextLink } from './styles';
import { PropsWithChildren } from 'react';

export interface TextLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  transform?: 'capitalize' | 'uppercase' | 'lowercase';
  disabled?: boolean;
  size?: SizeText;
  href?: string;
  target?: '_self' | '_blank';
  icon?: string | React.ReactNode;
  props?: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
}

export function TextLink({
  href,
  target,
  onClick,
  icon,
  size,
  transform,
  disabled,
  children,
  props
}: PropsWithChildren<TextLinkProps>) {
  return (
    <StyledTextLink
      href={href}
      target={target}
      onClick={onClick}
      $size={size}
      $transform={transform}
      $disabled={disabled}
      {...props}
    >
      <span>{icon}</span>
      {children}
    </StyledTextLink>
  );
}
