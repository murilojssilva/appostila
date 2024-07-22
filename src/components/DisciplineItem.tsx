import { StyledText, StyledView } from '../styles'

interface IDisciplineItemProps {
  discipline: string
  points: number
}

export function DisciplineItem({ discipline, points }: IDisciplineItemProps) {
  return (
    <StyledView className='flex-2 flex-row justify-between'>
      <StyledText className='font-bold text-gray-100 text-xl'>
        {discipline}
      </StyledText>
      <StyledText className='text-gray-300 text-sm'>{points}</StyledText>
    </StyledView>
  )
}
