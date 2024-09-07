import styled from 'styled-components';
import { theme } from '../../Themes';
export const SidebarGroupContainer = styled.div `
  display: flex;
  flex-direction: column;
  cursor: pointer;

  height: ${({ groupOpen, open }) => (groupOpen && open ? 'auto' : '40px')};
  background-color: ${({ groupOpen, open }) => (groupOpen && open ? 'rgba(255, 255, 255, 0.1)' : 'inherit')};
  overflow: hidden;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .wrapperTitle {
    cursor: pointer;
    min-height: ${({ groupOpen, open }) => (groupOpen && open ? '40px' : '54px')};
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
`;
export const SidebarGroupHeaderContainer = styled.div `
  display: flex;
  align-items: center;
  min-height: ${({ groupOpen, sidebarOpen }) => (groupOpen && sidebarOpen ? '40px' : '40px')};
  ${({ groupOpen, sidebarOpen }) => groupOpen && sidebarOpen && 'border-bottom: 1px solid rgba(255, 255, 255, 0.1)'};
  justify-content: ${({ sidebarOpen }) => (sidebarOpen ? 'space-between' : 'center')};
  text-wrap: nowrap;

  padding: 8px 8px;
  cursor: pointer;
  height: 100%;
  gap: 24px;

  color: ${({ disabled }) => (disabled ? 'rgba(255, 255, 255, 0.3)' : '#fff')};

  .title {
    width: 100%;
  }

 
`;
export const LockedModal = styled.div `
  width: 400px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .item-locked {
    color: ${theme.colors.honey40};
  }
`;
//# sourceMappingURL=styles.js.map