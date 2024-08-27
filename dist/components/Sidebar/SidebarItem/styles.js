import styled from 'styled-components';
export const Container = styled.div `
  display: flex;
  justify-content: ${({ sidebarOpen }) => (sidebarOpen ? 'space-between' : 'center')};
  align-items: center;
  min-height: 38px;
  padding: 8px;
  gap: 24px;

  color: ${({ disabled }) => (disabled ? 'rgba(255,255,255,0.4)' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  border-radius: ${({ isInsideGroup }) => !isInsideGroup && '4px'};
  &:hover {
    background-color: #192d53;
  }
  &:not(:last-child) {
    border-bottom: ${({ isInsideGroup }) => isInsideGroup && '1px solid rgba(255, 255, 255, 0.1)'};
  }

  .wrapper {
    padding: 4px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    display: flex;
    align-items: center;
  }

  .title {
    text-decoration: none;
    width: 100%;
    text-wrap: nowrap;
  }

  .lock {
    position: absolute;
    right: 20px;
    svg {
      opacity: 0.5;
      position: absolute;
      margin-bottom: 16px;
      font-size: 10px;
    }
  }
`;
export const Bullet = styled.div `
  position: relative;
  width: 24px;
  height: 100%;

  &::after {
    position: absolute;
    background: #fff;

    right: 0px;
    top: -2.5px;
    content: '';
    width: 5px;
    height: 5px;

    border-radius: 50%;
  }
`;
//# sourceMappingURL=styles.js.map