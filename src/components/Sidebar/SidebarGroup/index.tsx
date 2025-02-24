import { MouseEvent, PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { SidebarGroupContainer, SidebarGroupHeaderContainer } from './styles'
import React from 'react'
import { IconWrapper } from '../../IconWrapper'
import { Paragraph } from '../../Paragraph'
import { theme } from '../../Themes'
import { chevronDownSVG, lockSVG } from '../../../assets/icon'

export interface SidebarGroupProps {
  title: string
  icon: string
  sidebarOpen: boolean
  disabled?: boolean
  isCurrentGroup?: boolean
  onClick: () => void
}

const SidebarGroup = ({
  title,
  icon,
  children,
  sidebarOpen,
  disabled,
  onClick,
  isCurrentGroup,
}: PropsWithChildren<SidebarGroupProps>) => {
  const [groupOpen, setGroupOpen] = useState(false)

  useEffect(() => {
    if (groupOpen && disabled) setGroupOpen(false)
  }, [groupOpen, disabled])

  const onClickHandler = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (disabled) return

      if (!sidebarOpen) {
        onClick()
      } else {
        event.stopPropagation()
        setGroupOpen(!groupOpen)
      }
    },
    [disabled, sidebarOpen, groupOpen, onClick],
  )

  let color = '#fff'

  if (disabled) {
    color = 'rgba(255,255,255,0.3)'
  }

  if (isCurrentGroup) {
    color = '#217efd'
  }

  return (
    <SidebarGroupContainer $open={sidebarOpen} $groupOpen={groupOpen}>
      <SidebarGroupHeaderContainer
        $disabled={disabled}
        $sidebarOpen={sidebarOpen}
        $groupOpen={groupOpen}
        onClick={onClickHandler}
      >
        <IconWrapper src={icon} color={color} width="20px" />
        {sidebarOpen && (
          <span className="title">
            <Paragraph size="medium" heavyBod={isCurrentGroup} color={disabled ? theme.colors.shade40 : 'white'}>
              {title}
            </Paragraph>
          </span>
        )}
        {sidebarOpen &&
          (!disabled ? (
            <IconWrapper
              className={`icon ${groupOpen ? 'icon-rotate' : ''}`}
              src={chevronDownSVG}
              width="20px"
              color={theme.colors.shade30}
            />
          ) : (
            <IconWrapper src={lockSVG} width="20px" color="white" />
          ))}
      </SidebarGroupHeaderContainer>
      {children}
    </SidebarGroupContainer>
  )
}

export default SidebarGroup
