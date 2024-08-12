import { StyledText, StyledView } from '../styles'

interface IProfileRewardsItemProps {
  title: string
  content: string | number
  borderColor: string
}

export function ProfileRewardsItem({
  title,
  content,
  borderColor,
}: IProfileRewardsItemProps) {
  return (
    <StyledView
      className={`flex-2 flex-row justify-between p-4 bg-gray-200 my-2 rounded-xl border-l-8 border-l-${borderColor}`}
    >
      <StyledText className='font-bold text-sm'>{title}</StyledText>
      <StyledText className='font-semibold text-sx'>{content}</StyledText>
    </StyledView>
  )
}
