import { useNavigation } from '@react-navigation/native'
import { StyledText, StyledTouchableOpacity, StyledView } from '../styles'
import { FontAwesome5 } from '@expo/vector-icons'

interface IHeaderProps {
  title: string
  icon: string
}

export function Header({ title, icon }: IHeaderProps) {
  const navigation = useNavigation()

  return (
    <StyledView className='flex-2 flex-row justify-between items-center bg-gray-100 p-8'>
      <StyledTouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name='chevron-left' size={22} color='black' />
      </StyledTouchableOpacity>
      <StyledView className='flex-2 flex-row items-center justify-center'>
        <FontAwesome5 name={icon} size={22} color='#0e7490' />
        <StyledText className='text-xl text-gray-700 font-semibold'>{` ${title}`}</StyledText>
      </StyledView>
    </StyledView>
  )
}
