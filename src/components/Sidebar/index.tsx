import { useState } from 'react';
import SidebarGroup from './SidebarGroup';
import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';

import { SidebarContainer, SidebarScrollContainer, SidebarScrollWrapperContainer, SidebarSpacer } from './styles';

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
  warning?: string;
  link?: string;
}

export interface SidebarGroupData {
  name: string;
  link?: string;
  icon: string;
  warning?: string;
  itemIds?: string[];
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

export function Sidebar({
  logoUrl,
  layout,
  currentItemId,
  currentGroupId,
  setLink,
  items,
  logoOpacity,
  groups,
  baseColor
}: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarItemClickHandler = (itemId: string) => {
    const item = items[itemId];
    const link = item?.link;
    if (link) setLink(link);
  };

  return (
    <SidebarContainer $sidebarOpen={sidebarOpen} $baseColor={baseColor}>
      <SidebarLogo
        logoUrl={logoUrl}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        logoOpacity={logoOpacity}
        baseColor={baseColor}
      />
      <SidebarScrollWrapperContainer>
        <SidebarScrollContainer>
          {layout
            .map((item, index) => ({ id: index, disabled: undefined, ...item }))
            .map(item => {
              if (item.type === 'spacer') return <SidebarSpacer key={item.id} />;
              if (item.type === 'item') {
                const itemRouter = items[item.id];
                return (
                  <SidebarItem
                    key={item.id}
                    title={itemRouter?.menuTitle}
                    icon={itemRouter?.icon}
                    disabled={itemRouter?.disabled}
                    warning={itemRouter?.warning}
                    onClick={() => sidebarItemClickHandler(item.id)}
                    sidebarOpen={sidebarOpen}
                    isCurrentItem={currentItemId === item.id}
                  />
                );
              }
              if (item.type === 'group') {
                const group = groups[item.id];
                const itemShowInMenu = group.itemIds?.some(id => items[id]?.showInMenu !== false);
                if (group.itemIds == null || group.itemIds.length === 0 || !itemShowInMenu) {
                  const itemRouter = items[item.id];
                  return (
                    <SidebarItem
                      key={item.id}
                      onClick={() => sidebarItemClickHandler(item.id)}
                      sidebarOpen={sidebarOpen}
                      isCurrentItem={currentGroupId === item.id}
                      warning={itemRouter?.warning}
                      disabled={itemRouter.disabled}
                      title={itemRouter.menuTitle}
                      icon={itemRouter.icon}
                    />
                  );
                } else {
                  return (
                    <SidebarGroup
                      disabled={group.itemIds.every(id => items[id]?.disabled)}
                      key={item.id}
                      title={group.name}
                      icon={group.icon}
                      warning={group.warning}
                      sidebarOpen={sidebarOpen}
                      onClick={() => group.link && setLink(group.link)}
                      isCurrentGroup={currentGroupId === item.id}
                    >
                      {group.itemIds
                        .filter(id => items[id]?.showInMenu !== false)
                        .map(id => (
                          <SidebarItem
                            key={id}
                            title={items[id]?.menuTitle}
                            disabled={items[id]?.disabled}
                            warning={items[id]?.warning}
                            onClick={() => sidebarItemClickHandler(id)}
                            isCurrentItem={currentItemId === id}
                            sidebarOpen={sidebarOpen}
                            isInsideGroup
                          />
                        ))}
                    </SidebarGroup>
                  );
                }
              }
              return null;
            })}
        </SidebarScrollContainer>
      </SidebarScrollWrapperContainer>
    </SidebarContainer>
  );
}
