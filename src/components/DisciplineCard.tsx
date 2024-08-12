import { FontAwesome5 } from '@expo/vector-icons'
import { IDisciplineProps } from '../interfaces/IDisciplinesProps'
import { StyledText, StyledTouchableOpacity } from '../styles'

export function DisciplineCard({
  discipline,
  icon,
  ...props
}: IDisciplineProps) {
  return (
    <StyledTouchableOpacity
      className='flex-2 flex-row justify-between items-center border-2 border-cyan-700 rounded-xl px-6 py-8'
      {...props}
    >
      <FontAwesome5 name={icon} size={28} />
      <StyledText>{discipline}</StyledText>
    </StyledTouchableOpacity>
  )
}
