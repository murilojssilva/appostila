import { FontAwesome5 } from '@expo/vector-icons'
import { StyledTouchableOpacity } from '../styles'
import { TouchableOpacityProps } from 'react-native'

interface IIconActionProps extends TouchableOpacityProps {
  icon: string
  color: string
}

export function IconAction({ icon, color }: IIconActionProps) {
  return (
    <StyledTouchableOpacity>
      <FontAwesome5 name={icon} size={32} color={color} />
    </StyledTouchableOpacity>
  )
}
