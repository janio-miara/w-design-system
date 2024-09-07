import React from 'react';
export interface SidebarLayoutItemTypeItem {
    id: string;
    type: 'item';
}
export interface SidebarLayoutItemTypeGroup {
    id: string;
    type: 'group';
}
export interface SidebarLayoutItemTypeSpacer {
    type: 'spacer';
}
export interface SidebarItemData {
    showInMenu?: boolean;
    menuTitle: string;
    icon: string;
    disabled: boolean;
    link?: string;
}
export interface SidebarGroupData {
    name: string;
    link?: string;
    icon: string;
    itemIds: string[];
}
export interface SidebarProps {
    layout: (SidebarLayoutItemTypeItem | SidebarLayoutItemTypeGroup | SidebarLayoutItemTypeSpacer)[];
    currentItemId: string;
    currentGroupId: string;
    setLink: (link: string) => void;
    items: Record<string, SidebarItemData>;
    groups: Record<string, SidebarGroupData>;
    logoUrl: string;
    logoOpacity?: number;
    baseColor?: string;
}
export declare const Sidebar: ({ logoUrl, layout, currentItemId, currentGroupId, setLink, items, logoOpacity, groups, baseColor, }: SidebarProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map