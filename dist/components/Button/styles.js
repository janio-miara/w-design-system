import styled, { css, keyframes } from 'styled-components';
import { theme } from '../Themes';
const { colors } = theme;
// Animação de rotação
const spinAnimation = keyframes `
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
const buttonRadiusWrapperIconStyles = (color) => css `
  .buttonRadiusWrapperIcon {
    margin-top: 4px;
    svg {
      fill: ${color};
      path {
        fill: ${color};
      }
    }
  }
`;
const colorScheme = {
    primary: css `
    background: ${colors.cyan50};
    &:hover {
      background-color: ${colors.cyan40};
    }
    &:active {
      background-color: ${colors.cyan50};
    }
  `,
    secondary: css `
    background: ${colors.cyan30};
    &:hover {
      background-color: ${colors.cyan40};
    }
    &:active {
      background-color: ${colors.cyan30};
    }
  `,
    danger: css `
    background: ${colors.red40};
    &:hover {
      background-color: ${colors.red30};
    }
    &:active {
      background-color: ${colors.red40};
    }
  `,
    warning: css `
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
    success: css `
    background: ${colors.mint40};
    &:hover {
      background-color: ${colors.mint30};
    }
    &:active {
      background-color: ${colors.mint40};
    }
  `,
    gray: css `
    background: ${colors.shade10};
    color: ${colors.shade40};
    &:hover {
      background-color: ${colors.shade20};
    }
    &:active {
      background-color: ${colors.shade10};
    }
    ${buttonRadiusWrapperIconStyles(colors.shade40)};
  `,
    yellow: css `
    background: ${colors.yellow10};
    color: ${colors.yellow30};
    &:hover {
      background-color: ${colors.yellow20};
    }
    &:active {
      background-color: ${colors.yellow10};
    }
    ${buttonRadiusWrapperIconStyles(colors.yellow30)};
  `,
};
const colorSchemeOutilne = {
    primary: css `
    color: ${colors.cyan50};
    border: 2px solid ${colors.cyan50};
    &:hover {
      background-color: ${colors.cyan10};
    }
    &:active {
      background-color: ${colors.cyan10};
    }
    ${buttonRadiusWrapperIconStyles(colors.cyan50)};
  `,
    secondary: css `
    color: ${colors.cyan40};
    border: 2px solid ${colors.cyan40};
    &:hover {
      background-color: ${colors.cyan10};
    }
    &:active {
      background-color: ${colors.cyan10};
    }
    ${buttonRadiusWrapperIconStyles(colors.cyan40)};
  `,
    danger: css `
    color: ${colors.red40};
    border: 2px solid ${colors.red40};
    &:hover {
      background-color: ${colors.red10};
    }
    &:active {
      background-color: ${colors.red10};
    }
    ${buttonRadiusWrapperIconStyles(colors.red40)};
  `,
    warning: css `
    color: ${colors.honey40};
    border: 2px solid ${colors.honey40};
    &:hover {
      background-color: ${colors.honey10};
    }
    &:active {
      background-color: ${colors.honey10};
    }
    ${buttonRadiusWrapperIconStyles(colors.honey40)};
  `,
    success: css `
    color: ${colors.mint40};
    border: 2px solid ${colors.mint40};
    &:hover {
      background-color: ${colors.mint10};
    }
    &:active {
      background-color: ${colors.mint10};
    }
    ${buttonRadiusWrapperIconStyles(colors.mint40)};
  `,
    gray: css `
    color: ${colors.shade40};
    border: 2px solid ${colors.shade40};
    &:hover {
      background-color: ${colors.shade20};
    }
    &:active {
      background-color: ${colors.shade10};
    }
    ${buttonRadiusWrapperIconStyles(colors.shade40)};
  `,
    yellow: css `
    color: ${colors.yellow30};
    border: 2px solid ${colors.yellow30};
    &:hover {
      background-color: ${colors.yellow10};
    }
    &:active {
      background-color: ${colors.yellow10};
    }
    ${buttonRadiusWrapperIconStyles(colors.yellow30)};
  `,
};
const sizeScheme = {
    small: css `
    padding: 6px 12px;
    font-size: 12px;
  `,
    medium: css `
    padding: 8px 16px;
    font-size: 14px;
  `,
    large: css `
    padding: 12px 24px;
    font-size: 16px;
  `,
};
export const LoadingImage = styled.img `
  width: ${({ size }) => (size === 'small' ? '20px' : size === 'medium' ? '24px' : '24px')};
  height: ${({ size }) => (size === 'small' ? '20px' : size === 'medium' ? '24px' : '24px')};
  animation: ${spinAnimation} 2s linear infinite;
`;
export const ButtonStyled = styled.button `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 48px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  font-weight: 600;
  line-height: 140%;
  border: none;
  border-radius: ${({ radius }) => (radius ? '24px' : '5px')};
  font-family: 'Nunito Sans', sans-serif;
  transition:
    background-color 0.3s,
    opacity 0.3s;
  color: white;
  gap: 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  ${({ variant = 'primary', outline }) => (!outline ? colorScheme[variant] : colorSchemeOutilne[variant])};
  ${({ size = 'medium' }) => sizeScheme[size]};
  background: ${({ outline }) => outline && 'white'};
  border-radius: ${({ halfLeft, halfRight, radius }) => !halfLeft && !halfRight ? (radius ? '24px' : '5px') : halfLeft ? '24px 0 0 24px' : '0 24px 24px 0'};

  .buttonRadiusWrapperIcon {
    margin-top: 4px;
  }
`;
//# sourceMappingURL=styles.js.map