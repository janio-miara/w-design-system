import React, { useState } from 'react'
import { TabsTypes } from '../Types'
import { TabsContainerStyled, TabStyled } from './styles'

export const Tabs: React.FC<TabsTypes> = ({ tabs, defaultActiveTab, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0])

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  return (
    <TabsContainerStyled>
      {tabs.map(tab => (
        <TabStyled key={tab} active={tab === activeTab} onClick={() => handleTabClick(tab)}>
          {tab}
        </TabStyled>
      ))}
    </TabsContainerStyled>
  )
}
