import styled, { css } from 'styled-components'
import { theme } from '../Themes'
import { Color, SizeText } from '../Types'
import { changeBackground } from '../../utils/changeColorTheme'

export interface HighlightProps {
  $size?: SizeText
  $fontWeight?: 'bold' | 'lighter' | 'normal'
}

export const changeFontWeight = {
  bold: css`
    font-weight: bold;
  `,
  lighter: css`
    font-weight: lighter;
  `,
  normal: css`
    font-weight: normal;
  `,
}

const changeBackgroundNew = {
  lightDark: css`
    background: ${theme.colors.shade40};
    color: ${theme.colors.white};
  `,
}

export interface HighlightStyledProps {
  $color?: Color
}

export const HighlightStyled = styled.mark<HighlightStyledProps>`
  ${({ $color }) => ($color === 'lightDark' ? changeBackgroundNew.lightDark : changeBackground[$color || 'primary'])};
  color: white;
`;


export const Container = styled.div<HighlightProps>`
  font-family: ${theme.fonts.join()};
  ${({ $fontWeight }) => changeFontWeight[$fontWeight || 'normal']};
  font-size: ${({ $size }) => ($size ? theme.fontSizes[$size] : '12px')};

`
