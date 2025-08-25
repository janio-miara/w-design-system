import { theme } from '../components/Themes'
import { Color } from '../components/Types'

type variantTypes = 'contained' | 'outlined' | undefined

const handleColor = (color: Color, variant?: variantTypes) => {
  if (variant === 'outlined') {
    return 'transparent'
  }
  if (color === 'primary') {
    return theme.colors.cyan40
  }
  if (color === 'white') {
    return 'white'
  }
  if (color === 'default') {
    return theme.colors.shade40
  }
  if (color === 'secondary') {
    return theme.colors.cyan40
  }
  if (color === 'success') {
    return theme.colors.mint40
  }
  if (color === 'error') {
    return theme.colors.red40
  }
  if (color === 'warning') {
    return theme.colors.honey40
  }
  if (color === 'lightDark') {
    return theme.colors.shade40
  }
  if (color === 'dark') {
    return 'black'
  }
  return theme.colors.shade70
}
export default handleColor
