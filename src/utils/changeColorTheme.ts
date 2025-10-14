import { css } from 'styled-components';
import { theme } from '../components/Themes';
import { Color } from '../components/Types/index';

export const changeBackground = {
  primary: css`
    background: ${theme.colors.cyan40};
    color: ${theme.colors.white};
  `,
  white: css`
    background: ${theme.colors.white};
    color: ${theme.colors.white};
  `,
  default: css`
    background: ${theme.colors.shade50};
    color: ${theme.colors.white};
  `,
  secondary: css`
    background: ${theme.colors.cyan30};
    color: ${theme.colors.white};
  `,
  success: css`
    background: ${theme.colors.mint40};
    color: ${theme.colors.white};
  `,
  error: css`
    background: ${theme.colors.red40};
    color: ${theme.colors.white};
  `,
  warning: css`
    background: ${theme.colors.honey40};
    color: ${theme.colors.white};
  `,
  lightDark: css`
    background: ${theme.colors.shade20};
    color: ${theme.colors.white};
  `,
  dark: css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
  `
};

export const changeColorOutlined = {
  primary: css`
    border-color: ${theme.colors.cyan10};
    background-color: ${theme.colors.cyan10};
    color: ${theme.colors.cyan40};
  `,
  white: css`
    border-color: ${theme.colors.shade10};
    background-color: ${theme.colors.white};
    color: ${theme.colors.shade20};
  `,
  default: css`
    border-color: ${theme.colors.shade10};
    background-color: ${theme.colors.shade10};
    color: ${theme.colors.cyan40};
  `,
  secondary: css`
    border-color: ${theme.colors.cyan10};
    background-color: ${theme.colors.cyan10};
    color: ${theme.colors.cyan40};
  `,
  success: css`
    border-color: ${theme.colors.mint10};
    background-color: ${theme.colors.mint10};
    color: ${theme.colors.mint40};
  `,
  error: css`
    border-color: ${theme.colors.red10};
    background-color: ${theme.colors.red10};
    color: ${theme.colors.red40};
  `,
  warning: css`
    border-color: ${theme.colors.honey10};
    background-color: ${theme.colors.honey10};
    color: ${theme.colors.honey40};
  `,
  lightDark: css`
    border-color: ${theme.colors.shade10};
    background-color: ${theme.colors.shade10};
    color: ${theme.colors.shade40};
  `,
  dark: css`
    border-color: ${theme.colors.shade20};
    background-color: ${theme.colors.shade10};
    color: ${theme.colors.black};
  `
};

export const changeColor = {
  primary: css`
    color: ${theme.colors.cyan40};
  `,
  white: css`
    color: ${theme.colors.white};
  `,
  default: css`
    color: ${theme.colors.shade50};
  `,
  secondary: css`
    color: ${theme.colors.cyan30};
  `,
  success: css`
    color: ${theme.colors.mint40};
  `,
  error: css`
    color: ${theme.colors.red40};
  `,
  warning: css`
    color: ${theme.colors.honey40};
  `,
  lightDark: css`
    color: ${theme.colors.shade40};
  `,
  dark: css`
    color: ${theme.colors.black};
  `
} as const;

export const changePaletaColor = {
  primary: css`
    ${theme.colors.cyan40};
  `,
  white: css`
    ${theme.colors.white};
  `,
  default: css`
    ${theme.colors.shade50};
  `,
  secondary: css`
    ${theme.colors.cyan40};
  `,
  success: css`
    ${theme.colors.mint40};
  `,
  error: css`
    ${theme.colors.red40};
  `,
  warning: css`
    ${theme.colors.honey40};
  `,
  lightDark: css`
    color: ${theme.colors.shade50};
  `,
  dark: css`
    ${theme.colors.black};
  `
};

export const handleColor = (color: Color) => {
  if (color === 'primary') {
    return theme.colors.cyan40;
  }
  if (color === 'white') {
    return 'white';
  }
  if (color === 'default') {
    return theme.colors.shade50;
  }
  if (color === 'secondary') {
    return theme.colors.cyan40;
  }
  if (color === 'success') {
    return theme.colors.mint40;
  }
  if (color === 'error') {
    return theme.colors.red40;
  }
  if (color === 'warning') {
    return theme.colors.honey40;
  }
  if (color === 'lightDark') {
    return theme.colors.shade50;
  }
  if (color === 'dark') {
    return 'black';
  }
  return theme.colors.shade50;
};

