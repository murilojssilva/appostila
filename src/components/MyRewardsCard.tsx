import { FontAwesome5 } from '@expo/vector-icons'
import { StyledText, StyledTouchableOpacity, StyledView } from '../styles'
import { totalPoints } from '../constants/user'
import { TouchableOpacityProps } from 'react-native'

interface IMyRewardCardProps extends TouchableOpacityProps {}

export function MyRewardCard({ ...props }: IMyRewardCardProps) {
  return (
    <StyledTouchableOpacity
      {...props}
      className='flex-2 flex-row items-center justify-between p-8 rounded-xl border-2 border-gray-300 my-4'
    >
      <FontAwesome5 name='trophy' color='gold' size={48} />
      <StyledView className='flex-2 flex-col items-end justify-end'>
        <StyledText>Meu desempenho</StyledText>
        <StyledView className='flex-2 flex-row '>
          <StyledText className='text-gray-200 font-bold'>Pontos: </StyledText>
          <StyledText className='text-gray-200'>{totalPoints}</StyledText>
        </StyledView>
        <StyledText className='text-blue-600'>
          Ver detalhes <FontAwesome5 name='chevron-right' />
        </StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  )
}
