import styled from 'styled-components'
import { changeBackground } from '../../utils/changeColorTheme'
import { theme } from '../Themes'
import { Color } from 'components/Types';

export interface StyledDivisorProps {
  $size: '0.7px' | '1px' | '1.5px' | '2px';
  $color?: Color;
}
export const ContainerVertical = styled.div<StyledDivisorProps>`
  width: 100%;
  border-radius: ${theme.spacing.space2};
  ${({ $color }) => changeBackground[$color || 'primary']};
  height: ${({ $size }) => $size};
`

export const ContainerHorizontal = styled.div<StyledDivisorProps>`
  height: 100%;
  border-radius: ${theme.spacing.space2};
  width: ${({ $size }) => $size};
  ${({ $color }) => changeBackground[$color || 'primary']};
`
