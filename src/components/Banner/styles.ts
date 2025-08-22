import styled, { css } from 'styled-components'
import { theme } from '../Themes'

import { BannerTypes } from '../Types'

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
`
const colorScheme = {
  notice: css`
    background: ${colors.cyan10};
    border-color: ${colors.cyan40};
    ${buttonRadiusWrapperIconStyles(colors.cyan40)};
  `,
  danger: css`
    background: ${colors.red10};
    border-color: ${colors.red40};
    ${buttonRadiusWrapperIconStyles(colors.red40)};
  `,
  warning: css`
    background: ${colors.honey10};
    border-color: ${colors.honey40};
    ${buttonRadiusWrapperIconStyles(colors.honey40)};
  `,
  success: css`
    background: ${colors.mint10};
    border-color: ${colors.mint40};
    ${buttonRadiusWrapperIconStyles(colors.mint40)};
  `,
} as const

export const BannerStyled = styled.div<BannerTypes>`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 100px;
  min-height: 56px;
  padding: 12px 24px;
  border-radius: var(--component-border-radius, 5px);
  border: 1px dashed;
  ${({ variant = 'notice' }) => colorScheme[variant]};

  .bannerWrapper {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`
