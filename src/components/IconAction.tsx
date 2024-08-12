import { FontAwesome5 } from '@expo/vector-icons'
import { StyledTouchableOpacity } from '../styles'
import { TouchableOpacityProps } from 'react-native'

interface IIconActionProps extends TouchableOpacityProps {
  icon: string
  color: string
}

export function IconAction({ icon, color, ...props }: IIconActionProps) {
  return (
    <StyledTouchableOpacity {...props}>
      <FontAwesome5 name={icon} size={32} color={color} />
    </StyledTouchableOpacity>
  )
}
