import { StyledText, StyledView } from '../styles'

interface IProfileDetailsItemProps {
  title: string
  content: string | number
}

export function ProfileDetailsItem({
  title,
  content,
}: IProfileDetailsItemProps) {
  return (
    <StyledView className='flex-2 flex-row justify-between'>
      <StyledText className='font-bold text-sm'>{title}</StyledText>
      <StyledText className='font-semibold text-md'>{content}</StyledText>
    </StyledView>
  )
}
