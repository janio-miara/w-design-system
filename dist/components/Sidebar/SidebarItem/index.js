import React from 'react';
import { IconWrapper } from '../../IconWrapper';
import { Paragraph } from '../../Paragraph';
import { Bullet, Container } from './styles';
import { theme } from '../../Themes';
const SidebarItem = ({ title, disabled, icon, isInsideGroup, isCurrentItem, sidebarOpen, onClick, }) => {
    let color = '#fff';
    if (disabled) {
        color = 'rgba(255,255,255,0.3)';
    }
    if (isCurrentItem) {
        color = theme.colors.cyan30;
    }
    return (React.createElement(Container, { isCurrentItem: isCurrentItem, disabled: disabled !== null && disabled !== void 0 ? disabled : false, sidebarOpen: sidebarOpen, isInsideGroup: isInsideGroup, onClick: () => !disabled && onClick() },
        isInsideGroup ? (React.createElement(Bullet, null)) : (icon && (React.createElement("div", { className: "icon" },
            React.createElement(IconWrapper, { src: icon, color: color })))),
        sidebarOpen && (React.createElement("span", { className: "title" },
            React.createElement(Paragraph, { size: !isInsideGroup ? 'medium' : 'small', 
                /* eslint-disable-next-line no-nested-ternary */
                color: disabled ? theme.colors.shade40 : !isInsideGroup ? 'white' : theme.colors.shade10, heavyBod: isCurrentItem }, title)))));
};
export default SidebarItem;
//# sourceMappingURL=index.js.map