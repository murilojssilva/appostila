import { FontAwesome5 } from '@expo/vector-icons'
import { IDisciplineProps } from '../interfaces/IDisciplinesProps'
import { StyledText, StyledTouchableOpacity } from '../styles'

export function DisciplineCard({
  discipline,
  icon = 'globe',
  ...props
}: IDisciplineProps) {
  return (
    <StyledTouchableOpacity
      className='flex-2 flex-row justify-between items-center border-2 border-cyan-700 rounded-xl px-6 py-8 my-2'
      {...props}
    >
      <FontAwesome5 name={icon} size={28} color='#0097a7' />
      <StyledText className='font-bold text-sm'>{discipline}</StyledText>
    </StyledTouchableOpacity>
  )
}
