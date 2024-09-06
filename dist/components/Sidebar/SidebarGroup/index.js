import { useCallback, useEffect, useState } from 'react';
import { SidebarGroupContainer, SidebarGroupHeaderContainer } from './styles';
import React from 'react';
import { IconWrapper } from '../../IconWrapper';
import { Paragraph } from '../../Paragraph';
import { theme } from '../../Themes';
import { chevronDownSVG, lockSVG } from '../../../assets/icon';
const SidebarGroup = ({ title, icon, children, sidebarOpen, disabled, onClick, isCurrentGroup, }) => {
    const [groupOpen, setGroupOpen] = useState(false);
    useEffect(() => {
        if (groupOpen && disabled)
            setGroupOpen(false);
    }, [groupOpen, disabled]);
    const onClickHandler = useCallback((event) => {
        if (disabled)
            return;
        if (!sidebarOpen) {
            onClick();
        }
        else {
            event.stopPropagation();
            setGroupOpen(!groupOpen);
        }
    }, [disabled, sidebarOpen, groupOpen, onClick]);
    let color = '#fff';
    if (disabled) {
        color = 'rgba(255,255,255,0.3)';
    }
    if (isCurrentGroup) {
        color = '#217efd';
    }
    return (React.createElement(SidebarGroupContainer, { open: sidebarOpen, groupOpen: groupOpen },
        React.createElement(SidebarGroupHeaderContainer, { disabled: disabled, sidebarOpen: sidebarOpen, groupOpen: groupOpen, onClick: onClickHandler },
            React.createElement(IconWrapper, { src: icon, color: color, width: "20px" }),
            sidebarOpen && (React.createElement("span", { className: "title" },
                React.createElement(Paragraph, { size: "medium", heavyBod: isCurrentGroup, color: disabled ? theme.colors.shade40 : 'white' }, title))),
            sidebarOpen &&
                (!disabled ? (React.createElement(IconWrapper, { className: `icon ${groupOpen ? 'icon-rotate' : ''}`, src: chevronDownSVG, width: "20px", color: theme.colors.shade30 })) : (React.createElement(IconWrapper, { src: lockSVG, width: "20px", color: "white" })))),
        children));
};
export default SidebarGroup;
//# sourceMappingURL=index.js.map