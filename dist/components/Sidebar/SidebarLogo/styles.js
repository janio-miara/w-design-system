import styled from 'styled-components';
export const SidebarLogoContainer = styled.div `
  position: relative;

  --padding: 8px;


  margin-bottom: 32px;

  .logo {
    height: 40px;

    background: url(${({ logoUrl }) => logoUrl});
    background-size: ${({ sidebarOpen: open }) => (open ? `202px 40px` : '141px 28px')};
    background-repeat: no-repeat;
    background-position: -8px 0px;

    opacity: ${({ logoOpacity }) => logoOpacity !== null && logoOpacity !== void 0 ? logoOpacity : 1};
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

    background: #001640;
    color: #fff;

    border-radius: 0 var(--width) var(--width) 0;

    top: 42px;
    right: calc((var(--padding) + var(--width)) * -1);

    border: none;
    cursor: pointer;

    z-index: 2;
  }
`;
//# sourceMappingURL=styles.js.map