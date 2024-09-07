import styled from 'styled-components'
import { theme } from '../../Themes'

interface SidebarLogoContainerProps {
  logoOpacity?: number
  sidebarOpen: boolean
  logoUrl: string
  baseColor?: string
}

export const SidebarLogoContainer = styled.div<SidebarLogoContainerProps>`
  position: relative;

  --padding: 8px;


  margin-bottom: 32px;

  .logo {
    height: 40px;

    background: url(${({ logoUrl }) => logoUrl});
    background-size: ${({ sidebarOpen }) => (sidebarOpen ? `202px 40px` : '141px 28px')};
    background-repeat: no-repeat;
    background-position: -8px 0px;

    opacity: ${({ logoOpacity }) => logoOpacity ?? 1};
  }

  .close {
    --width: 28px;
    --height: 32px;
    display: flex;
    position: absolute;

    align-items: center;
    justify-content: center;

    height: var(--height);
    width: var(--width);

    background: ${({ baseColor }) => baseColor || theme.colors.cyan50};
    color: #fff;

    border-radius: 0 var(--width) var(--width) 0;

    top: 42px;
    right: calc((var(--padding) + var(--width)) * -1);

    border: none;
    cursor: pointer;

    z-index: 2;
  }
`
