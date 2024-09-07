import { useState } from 'react';
import SidebarGroup from './SidebarGroup';
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import React from 'react';
import { SidebarContainer, SidebarScrollContainer, SidebarScrollWrapperContainer, SidebarSpacer } from './styles';
export const Sidebar = ({ logoUrl, layout, currentItemId, currentGroupId, setLink, items, logoOpacity, groups, baseColor, }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const sidebarItemClickHandler = (itemId) => {
        const item = items[itemId];
        const link = item === null || item === void 0 ? void 0 : item.link;
        if (link)
            setLink(link);
    };
    console.log(baseColor);
    return (React.createElement(SidebarContainer, { sidebarOpen: sidebarOpen, baseColor: baseColor },
        React.createElement(SidebarLogo, { logoUrl: logoUrl, sidebarOpen: sidebarOpen, setSidebarOpen: setSidebarOpen, logoOpacity: logoOpacity, baseColor: baseColor }),
        React.createElement(SidebarScrollWrapperContainer, null,
            React.createElement(SidebarScrollContainer, null, layout
                .map((item, index) => (Object.assign({ id: index, disabled: undefined }, item)))
                .map(item => {
                var _a, _b, _c;
                if (item.type === 'spacer')
                    return React.createElement(SidebarSpacer, { key: item.id });
                if (item.type === 'item')
                    return (React.createElement(SidebarItem, { key: item.id, title: (_a = items[item.id]) === null || _a === void 0 ? void 0 : _a.menuTitle, icon: (_b = items[item.id]) === null || _b === void 0 ? void 0 : _b.icon, disabled: (_c = items[item.id]) === null || _c === void 0 ? void 0 : _c.disabled, onClick: () => sidebarItemClickHandler(item.id), sidebarOpen: sidebarOpen, isCurrentItem: currentItemId === item.id }));
                if (item.type === 'group') {
                    const group = groups[item.id];
                    return (React.createElement(SidebarGroup, { disabled: group.itemIds.every(id => { var _a; return (_a = items[id]) === null || _a === void 0 ? void 0 : _a.disabled; }), key: item.id, title: group.name, icon: group.icon, sidebarOpen: sidebarOpen, onClick: () => group.link && setLink(group.link), isCurrentGroup: currentGroupId === item.id }, group.itemIds
                        .filter(id => { var _a; return ((_a = items[id]) === null || _a === void 0 ? void 0 : _a.showInMenu) !== false; })
                        .map(id => {
                        var _a, _b;
                        return (React.createElement(SidebarItem, { key: id, title: (_a = items[id]) === null || _a === void 0 ? void 0 : _a.menuTitle, disabled: (_b = items[id]) === null || _b === void 0 ? void 0 : _b.disabled, onClick: () => sidebarItemClickHandler(id), isCurrentItem: currentItemId === id, sidebarOpen: sidebarOpen, isInsideGroup: true }));
                    })));
                }
                return null;
            })))));
};
//# sourceMappingURL=index.js.map