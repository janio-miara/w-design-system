import React from 'react'
import { IconWrapper } from '../../IconWrapper'
import { Paragraph } from '../../Paragraph'
import { Bullet, Container } from './styles'
import { theme } from '../../Themes'
import { lockSVG } from '../../../assets/icon'

export interface SidebarItemProps {
  disabled?: boolean
  title: string
  icon?: string
  onClick: () => void
  isCurrentItem: boolean
  sidebarOpen: boolean
  isInsideGroup?: boolean
}

const SidebarItem = ({
  title,
  disabled,
  icon,
  isInsideGroup,
  isCurrentItem,
  sidebarOpen,
  onClick,
}: SidebarItemProps) => {
  let color = '#fff'

  if (disabled) {
    color = 'rgba(255,255,255,0.3)'
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
    >
      {isInsideGroup ? (
        <Bullet />
      ) : (
        icon && (
          <div className="icon">
            <IconWrapper src={icon} color={color} width='20px' />
          </div>
        )
      )}
      {sidebarOpen && (
        <>
          <span className="title">
            <Paragraph
              size={!isInsideGroup ? 'medium' : 'small'}
              /* eslint-disable-next-line no-nested-ternary */
              color={disabled ? theme.colors.shade40 : !isInsideGroup ? 'white' : theme.colors.shade10}
              heavyBod={isCurrentItem}
            >
              {title}
            </Paragraph>
          </span>
          {disabled && <IconWrapper src={lockSVG} width="20px" color="white" />}
        </>
      )}
    </Container>
  )
}

export default SidebarItem
