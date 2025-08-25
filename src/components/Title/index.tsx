import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { theme } from '../Themes';

const sizes = {
  ...theme.title
};

export interface StyledTitleProps {
  $size: 'medium' | 'large';
  $bold?: boolean;
  $color?: string;
}

const StyledTitle = styled.p<StyledTitleProps>`
  margin: 0;
  padding: 0;
  font-size: ${props => sizes[props.$size]};
  font-weight: ${props => (props.$bold ? 800 : 400)};
  line-height: 130%;
  font-family: 'Nunito Sans', sans-serif;
  color: ${props => props.$color || 'inherit'};
`;

export interface TitleProps {
  size: 'medium' | 'large';
  bold?: boolean;
  color?: string;
}

export function Title({ size = 'medium', bold, color, children }: PropsWithChildren<TitleProps>) {
  return (
    <StyledTitle $size={size} $bold={bold} $color={color}>
      {children}
    </StyledTitle>
  );
}
