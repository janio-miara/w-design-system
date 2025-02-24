import styled from 'styled-components'
import { theme } from '../Themes'

interface SidebarContainerProps {
  $sidebarOpen: boolean
  $baseColor?: string
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  position: relative;
  box-sizing: border-box;
  color: white;
  height: 100vh;
  height: 100dvh;
  padding: 16px 16px 0 16px;
  width: min-content;
  border-radius: ${({ $sidebarOpen: sidebarOpen }) => sidebarOpen && '0 60px 0px 0;'};
  background: ${({ $baseColor: baseColor }) => baseColor || theme.colors.cyan50};
  /* Mantenha o estilo do container ao passar o mouse */
  &:hover {
    &::-webkit-scrollbar {
      width: 0;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
  }
`

export const SidebarScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: calc(100% - 36px);
  margin-bottom: 36px;
`

export const SidebarScrollWrapperContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 0;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
  }
`

export const SidebarSpacer = styled.div`
  flex-grow: 1;
`
