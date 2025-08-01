import { IconWrapper } from '../../IconWrapper'
import { Paragraph } from '../../Paragraph'
import { Bullet, Container } from './styles'
import { theme } from '../../Themes'
import { lockSVG, warningSVG } from '../../../assets/icon'

export interface SidebarItemProps {
  disabled?: boolean
  title: string
  icon?: string
  onClick: () => void
  isCurrentItem: boolean
  warning?: string
  sidebarOpen: boolean
  isInsideGroup?: boolean
}

const SidebarItem = ({
  title,
  disabled,
  icon,
  warning,
  isInsideGroup,
  isCurrentItem,
  sidebarOpen,
  onClick,
}: SidebarItemProps) => {
  let color = '#fff'
  let textColor = '#fff'

  if (isInsideGroup) {
    textColor = theme.colors.shade10
  }

  if (disabled) {
    color = 'rgba(255,255,255,0.3)'
    textColor = theme.colors.shade40
  }

  if (isCurrentItem) {
    color = theme.colors.cyan30
  }

  return (
    <Container
      $isCurrentItem={isCurrentItem}
      $disabled={disabled ?? false}
      $sidebarOpen={sidebarOpen}
      $isInsideGroup={isInsideGroup}
      onClick={() => !disabled && onClick()}
      title={warning}
    >
      {isInsideGroup ? (
        <Bullet />
      ) : (
        icon && (
          <div className="icon">
            <IconWrapper src={icon} color={color} width="20px" />
          </div>
        )
      )}
      {sidebarOpen && (
        <>
          <span className="title">
            <Paragraph size={!isInsideGroup ? 'medium' : 'small'} color={textColor} heavyBod={isCurrentItem}>
              {title}
            </Paragraph>
          </span>
          {disabled ? (
            <IconWrapper src={lockSVG} width="20px" color="white" />
          ) : warning ? (
            <IconWrapper src={warningSVG} width="20px" color="white" />
          ) : null}
        </>
      )}
    </Container>
  )
}

export default SidebarItem
