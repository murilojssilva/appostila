import { FontAwesome5 } from '@expo/vector-icons'
import { StyledTouchableOpacity } from '../styles'
import { TouchableOpacityProps } from 'react-native'

interface IIconActionProps extends TouchableOpacityProps {
  icon: string
}

export function IconAction({ icon }: IIconActionProps) {
  return (
    <StyledTouchableOpacity>
      <FontAwesome5 name={icon} size={26} />
    </StyledTouchableOpacity>
  )
}
