import React, { useState } from 'react';
import { TabsContainerStyled, TabStyled } from './styles';
export const Tabs = ({ tabs, defaultActiveTab, onTabChange }) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]);
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (onTabChange) {
            onTabChange(tab);
        }
    };
    return (React.createElement(TabsContainerStyled, null, tabs.map(tab => (React.createElement(TabStyled, { key: tab, active: tab === activeTab, onClick: () => handleTabClick(tab) }, tab)))));
};
//# sourceMappingURL=index.js.map