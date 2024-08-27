import React from 'react';
export interface SidebarLogoProps {
    sidebarOpen: boolean;
    logoOpacity?: number;
    setSidebarOpen: (value: boolean) => void;
    logoUrl: string;
}
declare const SidebarLogo: ({ sidebarOpen, setSidebarOpen, logoOpacity, logoUrl }: SidebarLogoProps) => React.JSX.Element;
export default SidebarLogo;
//# sourceMappingURL=index.d.ts.map