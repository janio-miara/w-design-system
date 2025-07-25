import { IconWrapper } from '../IconWrapper'
import { ButtonStyled } from './styles'
import { ButtonTypes } from '../Types'
import { spinSVG } from '../../assets/icon'
import { theme } from '../Themes'
const { colors } = theme

interface ColorLoadingProps {
  variant: ButtonTypes['variant']
  outline?: boolean
}

const handleColorLoading = ({ variant, outline }: ColorLoadingProps) => {
  if (outline) {
    if (variant === 'primary') {
      return colors.cyan50
    }
    if (variant === 'secondary') {
      return colors.cyan30
    }
    if (variant === 'danger') {
      return colors.red40
    }
    if (variant === 'warning') {
      return colors.honey30
    }
    if (variant === 'gray') {
      return colors.shade30
    }
    if (variant === 'success') {
      return colors.mint40
    }
    if (variant === 'yellow') {
      return colors.yellow30
    }
  }
  if (variant === 'primary') {
    return 'white'
  }
  if (variant === 'warning') {
    return colors.honey30
  }
  if (variant === 'gray') {
    return colors.shade40
  }

  if (variant === 'yellow') {
    return colors.yellow30
  }
  return 'white'
}

export const Button = ({
  variant = 'primary',
  children,
  disabled = false,
  icon,
  radius,
  outline,
  halfLeft,
  halfRight,
  fullWidth,
  size,
  loading,
  ...props
}: ButtonTypes) => (
  <ButtonStyled
    variant={variant}
    disabled={disabled}
    radius={radius}
    outline={outline}
    halfLeft={halfLeft}
    halfRight={halfRight}
    fullWidth={fullWidth}
    size={size}
    {...props}
  >
    {loading && <IconWrapper src={spinSVG} loading color={handleColorLoading({ variant, outline })} />}
    {icon && (
      <IconWrapper
        src={icon}
        color={'white'}
        className={'buttonRadiusWrapperIcon'}
        width={size !== 'large' ? '20px' : '24px'}
        height={size !== 'large' ? '20px' : '24px'}
      />
    )}
    {children}
  </ButtonStyled>
)
