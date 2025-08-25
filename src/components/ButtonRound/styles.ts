import styled, { css } from 'styled-components'
import { theme } from '../Themes'
import { ColorsVariant } from 'components/Types'

const { colors } = theme
const buttonRadiusWrapperIconStyles = (color: string) => css`
  .buttonRadiusWrapperIcon {
    svg {
      fill: ${color};
      path {
        fill: ${color};
      }
    }
  }
  .buttonRoundBadge {
    background: ${color};
  }
`
const colorScheme = {
  primary: css`
    background: ${colors.shade10};
    ${buttonRadiusWrapperIconStyles(colors.shade30)}
    &:hover {
      background-color: ${colors.shade20};
      ${buttonRadiusWrapperIconStyles(colors.cyan40)};
    }
    &:active {
      background-color: ${colors.shade10};
      ${buttonRadiusWrapperIconStyles(colors.shade30)};
    }
  `,
  secondary: css`
    background: ${colors.cyan10};
    &:hover {
      background-color: ${colors.cyan10};
      ${buttonRadiusWrapperIconStyles(colors.cyan30)}
    }
    &:active {
      background-color: ${colors.cyan10};
    }
    ${buttonRadiusWrapperIconStyles(colors.cyan40)};
  `,
  danger: css`
    background: ${colors.red10};
    &:hover {
      background-color: ${colors.red20};
    }
    &:active {
      background-color: ${colors.red10};
    }
    ${buttonRadiusWrapperIconStyles(colors.red40)};
  `,
  warning: css`
    background: ${colors.honey10};
    color: ${colors.honey30};
    &:hover {
      background-color: ${colors.honey20};
    }
    &:active {
      background-color: ${colors.honey10};
    }
    ${buttonRadiusWrapperIconStyles(colors.honey30)};
  `,
  success: css`
    background: ${colors.mint10};
    &:hover {
      background-color: ${colors.mint20};
    }
    &:active {
      background-color: ${colors.mint10};
    }
    ${buttonRadiusWrapperIconStyles(colors.mint40)};
  `,
  gray: css`
    background: ${colors.shade10};
    &:hover {
      background-color: ${colors.shade20};
    }
    &:active {
      background-color: ${colors.shade10};
    }
    ${buttonRadiusWrapperIconStyles(colors.shade40)};
  `,
  yellow: css`
    background: ${colors.yellow10};
    &:hover {
      background-color: ${colors.yellow20};
    }
    &:active {
      background-color: ${colors.yellow10};
    }
    ${buttonRadiusWrapperIconStyles(colors.yellow30)};
  `,
} as const


export interface StyledButtonRoundProps {
  $variant?: ColorsVariant;
  $size?: 'small' | 'medium';
}


export const ButtonStyled = styled.button<StyledButtonRoundProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: ${({ $size }) => ($size === 'small' ? '32px' : '40px')};
  width: ${({ $size }) => ($size === 'small' ? '32px' : '40px')};
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  border: none;
  border-radius: 100%;
  font-family: 'Nunito Sans', sans-serif;
  transition:
    color 0.3s,
    background-color 0.3s,
    opacity 0.3s;
  color: white;
  gap: ${({ $size }) => ($size === 'small' ? '8' : '12px')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  ${({ $variant = 'primary' }) => colorScheme[$variant]};

  .buttonRadiusWrapperIcon {
    margin-top: 4px;
  }
  .buttonRoundBadge {
    box-sizing: border-box;
    margin-bottom: 24px;
    margin-left: 54px;
    position: absolute;
    width: ${({ $size }) => ($size === 'small' ? '16px' : '26px')};
    height: ${({ $size }) => ($size === 'small' ? '16px' : '26px')};
    border-radius: 100%;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid;
  }
`
