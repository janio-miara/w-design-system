import React from 'react'
import { chevronLeftSVG, chevronRightSVG } from '../../../assets/icon'
import { IconWrapper } from '../../IconWrapper'
import { SidebarLogoContainer } from './styles'

export interface SidebarLogoProps {
  sidebarOpen: boolean
  logoOpacity?: number
  setSidebarOpen: (value: boolean) => void
  logoUrl: string
}

const SidebarLogo = ({ sidebarOpen, setSidebarOpen, logoOpacity, logoUrl }: SidebarLogoProps) => {
  return (
    <SidebarLogoContainer logoUrl={logoUrl} logoOpacity={logoOpacity} sidebarOpen={sidebarOpen}>
      <button type="button" onClick={() => setSidebarOpen(!sidebarOpen)} className="close" aria-label="Fechar menu">
        <IconWrapper src={sidebarOpen ? chevronRightSVG : chevronLeftSVG} color="#fff" width="12px" height="12px" />
      </button>
      <div className="logo" />
    </SidebarLogoContainer>
  )
}
export default SidebarLogo
