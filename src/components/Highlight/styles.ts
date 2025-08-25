import styled, { css } from 'styled-components'
import { theme } from '../Themes'
import { Color, SizeText } from '../Types'
import { changeBackground } from '../../utils/changeColorTheme'

export interface HighlightProps {
  $color?: Color
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

export const Container = styled.div<HighlightProps>`
  font-family: ${theme.fonts.join()};
  ${({ $fontWeight }) => changeFontWeight[$fontWeight || 'normal']};
  font-size: ${({ $size }) => ($size ? theme.fontSizes[$size] : '12px')};
  .highlight {
    ${({ $color }) => ($color === 'lightDark' ? changeBackgroundNew.lightDark : changeBackground[$color || 'primary'])};
    color: white;
  }
`
