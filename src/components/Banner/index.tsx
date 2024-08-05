import React from 'react'
import { BannerStyled } from './styles'
import { BannerTypes } from '../Types'
import { docCheckSVG, alertSVG, commentSVG, closeSVG } from '../../assets/icon'
import { IconWrapper } from '../IconWrapper'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'
const {
  colors: { cyan40, mint40, honey40, red40, shade40, shade30 },
} = theme
export const Banner: React.FC<BannerTypes> = ({ title, onClick, variant, subTitle, ...props }) => {
  const searchIcon = () => {
    switch (variant) {
      case 'notice':
        return { icon: commentSVG, color: cyan40 }
      case 'success':
        return { icon: docCheckSVG, color: mint40 }
      case 'warning':
        return { icon: alertSVG, color: honey40 }
      case 'danger':
        return { icon: alertSVG, color: red40 }
      default:
        return { icon: commentSVG, color: cyan40 }
    }
  }

  const { icon, color } = searchIcon()

  return (
    <BannerStyled variant={variant} {...props}>
      <div className={'bannerWrapper'}>
        <IconWrapper src={icon} className={'buttonRadiusWrapperIcon'} />
        <span>
          <Paragraph size={'medium'} color={color}>
            {title}
          </Paragraph>
          {subTitle && (
            <Paragraph size={'small'} color={shade40}>
              {subTitle}
            </Paragraph>
          )}
        </span>
      </div>
      <IconWrapper src={closeSVG} width={'14px'} height={'14px'} color={shade30} onClick={onClick} />
    </BannerStyled>
  )
}
