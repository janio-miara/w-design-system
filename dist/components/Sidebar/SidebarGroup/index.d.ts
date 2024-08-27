import { PropsWithChildren } from 'react';
import React from 'react';
export interface SidebarGroupProps {
    title: string;
    icon: string;
    sidebarOpen: boolean;
    disabled?: boolean;
    isCurrentGroup?: boolean;
    onClick: () => void;
}
declare const SidebarGroup: ({ title, icon, children, sidebarOpen, disabled, onClick, isCurrentGroup, }: PropsWithChildren<SidebarGroupProps>) => React.JSX.Element;
export default SidebarGroup;
//# sourceMappingURL=index.d.ts.map