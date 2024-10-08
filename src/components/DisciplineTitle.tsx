import { FontAwesome5 } from '@expo/vector-icons'

import { IDisciplineTitleProps } from '../interfaces/IDisciplinesProps'
import { StyledText, StyledView } from '../styles'

import '../styles/tailwind.css'

export function DisciplineTitle({
  discipline,
  icon,
  colorIcon,
  colorText,
}: IDisciplineTitleProps) {
  return (
    <StyledView className='flex-2 flex-col items-center gap-4 p-8'>
      <FontAwesome5 name={icon} size={32} color={colorIcon} />
      <StyledText className={`font-bold text-${colorText}`}>
        {discipline}
      </StyledText>
    </StyledView>
  )
}
