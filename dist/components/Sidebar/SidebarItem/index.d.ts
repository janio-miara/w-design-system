import React from 'react';
export interface SidebarItemProps {
    disabled?: boolean;
    title: string;
    icon?: string;
    onClick: () => void;
    isCurrentItem: boolean;
    sidebarOpen: boolean;
    isInsideGroup?: boolean;
}
declare const SidebarItem: ({ title, disabled, icon, isInsideGroup, isCurrentItem, sidebarOpen, onClick, }: SidebarItemProps) => React.JSX.Element;
export default SidebarItem;
//# sourceMappingURL=index.d.ts.map