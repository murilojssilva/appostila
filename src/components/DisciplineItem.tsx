import { StyledText, StyledView } from '../styles'

interface IDisciplineItemProps {
  discipline: string
  points: number
}

export function DisciplineItem({ discipline, points }: IDisciplineItemProps) {
  return (
    <StyledView
      className={`flex-2 flex-row justify-between items-center p-4 bg-gray-200 my-2 rounded-xl border-l-8 border-l-lime-600`}
    >
      <StyledText className='font-bold text-gray-800 text-xl'>
        {discipline}
      </StyledText>
      <StyledText className='text-gray-700 text-sm'>{points}</StyledText>
    </StyledView>
  )
}
