import styled from 'styled-components';
import { theme } from '../Themes';
const { colors: { shade20 }, zIndex: { z8, z9 }, } = theme;
export const Overlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${z8};
`;
export const ModalContainer = styled.div `
  display: flex;
  min-width: 360px;
  width: auto;
  height: auto;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 1px solid ${shade20};
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: ${z9};

  .modalContainer {
    min-height: 100px;
  }
  .modalHeader {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
  }
  .modalFooter {
    display: inline-flex;
    justify-content: flex-end;
    width: 100%;
    gap: 0 24px;
  }
`;
//# sourceMappingURL=styles.js.map