import { chevronLeftSVG, chevronRightSVG } from '../../../assets/icon'
import { IconWrapper } from '../../IconWrapper'
import { SidebarLogoContainer } from './styles'

export interface SidebarLogoProps {
  sidebarOpen: boolean
  logoOpacity?: number
  setSidebarOpen: (value: boolean) => void
  logoUrl: string
  baseColor?: string
}

const SidebarLogo = ({ sidebarOpen, setSidebarOpen, logoOpacity, logoUrl, baseColor }: SidebarLogoProps) => {
  return (
    <SidebarLogoContainer $logoUrl={logoUrl} $logoOpacity={logoOpacity} $sidebarOpen={sidebarOpen} $baseColor={baseColor}>
      <button type="button" onClick={() => setSidebarOpen(!sidebarOpen)} className="close" aria-label="Fechar menu">
        <IconWrapper src={sidebarOpen ? chevronLeftSVG : chevronRightSVG} color="#fff" width="12px" height="12px" />
      </button>
      <div className="logo" />
    </SidebarLogoContainer>
  )
}
export default SidebarLogo
