import { FontAwesome5 } from '@expo/vector-icons'
import { StyledText, StyledTouchableOpacity, StyledView } from '../styles'
import { totalPoints } from '../constants/user'
import { TouchableOpacityProps } from 'react-native'

interface IMyRewardCardProps extends TouchableOpacityProps {}

export function MyRewardCard({ ...props }: IMyRewardCardProps) {
  return (
    <StyledTouchableOpacity
      {...props}
      className='flex-2 flex-row items-center justify-between p-8 rounded-xl bg-cyan-800 my-[-60]'
    >
      <FontAwesome5 name='trophy' color='gold' size={48} />
      <StyledView className='flex-2 flex-col items-end justify-end'>
        <StyledView className='flex-2 flex-row '>
          <StyledText className='text-md text-gray-200'>
            Você tem{' '}
            <StyledText className='font-bold'>{totalPoints}</StyledText> pontos
          </StyledText>
        </StyledView>
        <StyledText className='text-sm text-gray-200'>
          Ver detalhes <FontAwesome5 name='chevron-right' />
        </StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  )
}
