import styled from 'styled-components'
import { theme } from '../../Themes'

interface SidebarGroupContainerProps {
  $open: boolean
  $groupOpen: boolean
}

export const SidebarGroupContainer = styled.div<SidebarGroupContainerProps>`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  height: ${({ $groupOpen: groupOpen, $open: open }) => (groupOpen && open ? 'auto' : '40px')};
  background-color: ${({ $groupOpen: groupOpen, $open: open }) => (groupOpen && open ? 'rgba(255, 255, 255, 0.1)' : 'inherit')};
  overflow: hidden;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .wrapperTitle {
    cursor: pointer;
    min-height: ${({ $groupOpen: groupOpen, $open: open }) => (groupOpen && open ? '40px' : '54px')};
    padding: 0 14px;
    display: flex;
    align-items: center;
    height: 100%;
    gap: 30px;
    justify-content: left;
    svg {
      width: 20px;
    }
  }

  &.locked {
    pointer-events: none;
  }
`

interface SidebarGroupContainerHeaderProps {
  $sidebarOpen: boolean
  $groupOpen: boolean
  $disabled?: boolean
}

export const SidebarGroupHeaderContainer = styled.div<SidebarGroupContainerHeaderProps>`
  display: flex;
  align-items: center;
  min-height: ${({ $groupOpen: groupOpen, $sidebarOpen: sidebarOpen }) => (groupOpen && sidebarOpen ? '40px' : '40px')};
  ${({ $groupOpen: groupOpen, $sidebarOpen: sidebarOpen }) => groupOpen && sidebarOpen && 'border-bottom: 1px solid rgba(255, 255, 255, 0.1)'};
  justify-content: ${({ $sidebarOpen: sidebarOpen }) => (sidebarOpen ? 'space-between' : 'center')};
  white-space: nowrap;

  padding: 8px 8px;
  cursor: pointer;
  height: 100%;
  gap: 24px;

  color: ${({ $disabled: disabled }) => (disabled ? 'rgba(255, 255, 255, 0.3)' : '#fff')};

  .title {
    width: 100%;
  }

 
`

export const LockedModal = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .item-locked {
    color: ${theme.colors.honey40};
  }
`
