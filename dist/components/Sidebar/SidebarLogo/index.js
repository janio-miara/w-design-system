import React from 'react';
import { chevronLeftSVG, chevronRightSVG } from '../../../assets/icon';
import { IconWrapper } from '../../IconWrapper';
import { SidebarLogoContainer } from './styles';
const SidebarLogo = ({ sidebarOpen, setSidebarOpen, logoOpacity, logoUrl, baseColor }) => {
    return (React.createElement(SidebarLogoContainer, { logoUrl: logoUrl, logoOpacity: logoOpacity, sidebarOpen: sidebarOpen, baseColor: baseColor },
        React.createElement("button", { type: "button", onClick: () => setSidebarOpen(!sidebarOpen), className: "close", "aria-label": "Fechar menu" },
            React.createElement(IconWrapper, { src: sidebarOpen ? chevronRightSVG : chevronLeftSVG, color: "#fff", width: "12px", height: "12px" })),
        React.createElement("div", { className: "logo" })));
};
export default SidebarLogo;
//# sourceMappingURL=index.js.map