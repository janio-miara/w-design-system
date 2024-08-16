import styled, { css } from 'styled-components';
import { theme } from '../Themes';
const { colors } = theme;
const buttonRadiusWrapperIconStyles = (color) => css `
  .buttonRadiusIconWrapperIcon {
    background: ${color};
    width: 56px;
    height: 100%;
    overflow: hidden;
  }
`;
const colorScheme = {
    primary: css `
    background: ${colors.cyan10};
    color: ${colors.cyan50};
    &:hover {
      background-color: ${colors.cyan10};
    }
    &:active {
      background-color: ${colors.cyan10};
    }
    ${buttonRadiusWrapperIconStyles(colors.cyan50)};
  `,
    secondary: css `
    background: ${colors.cyan10};
    color: ${colors.cyan30};
    &:hover {
      background-color: ${colors.cyan10};
      opacity: 0.9;
    }
    &:active {
      background-color: ${colors.cyan10};
      opacity: 1;
    }
    ${buttonRadiusWrapperIconStyles(colors.cyan30)};
  `,
    danger: css `
    background: ${colors.red10};
    color: ${colors.red40};
    &:hover {
      background-color: ${colors.red20};
    }
    &:active {
      background-color: ${colors.red10};
    }
    ${buttonRadiusWrapperIconStyles(colors.red40)};
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
    background: ${colors.mint10};
    color: ${colors.mint40};
    &:hover {
      background-color: ${colors.mint20};
    }
    &:active {
      background-color: ${colors.mint10};
    }
    ${buttonRadiusWrapperIconStyles(colors.mint40)};
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
      opacity: 0.9;
    }
    &:active {
      background-color: ${colors.yellow10};
      opacity: 1;
    }
    ${buttonRadiusWrapperIconStyles(colors.yellow30)};
  `,
};
export const ButtonStyled = styled.button `
  display: inline-flex;
  box-sizing: border-box;
  height: 48px;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  min-width: 190px;
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  border: none;
  border-radius: 24px;
  overflow: hidden;
  font-family: 'Nunito Sans', sans-serif;
  transition:
    background-color 0.3s,
    opacity 0.3s;
  color: white;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  ${({ variant = 'primary' }) => colorScheme[variant]};

  .buttonRadiusIconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    gap: 6px;
    height: 48px;
  }
  .buttonRadiusIconTitle {
    color: ${colors.shade40};
    font-weight: 400;
  }

  .buttonRadiusWrapperIcon {
    margin-top: 2px;
  }
`;
//# sourceMappingURL=styles.js.map