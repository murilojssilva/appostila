import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { StyledScrollView, StyledText, StyledView } from '../styles'

export function Profile() {
  return (
    <StyledScrollView className='flex-1 flex-col'>
      <Header title='Perfil' icon='user' />
      <StyledView className='flex-2 p-4'>
        <Title text='Dados pessoais' />
        <StyledView className='flex-2 flex-row justify-between'>
          <StyledText>Nome</StyledText>
          <StyledText>Murilo</StyledText>
        </StyledView>

        <StyledView className='flex-2 flex-row justify-between'>
          <StyledText>Nome</StyledText>
          <StyledText>Murilo</StyledText>
        </StyledView>

        <StyledView className='flex-2 flex-row justify-between'>
          <StyledText>Nome</StyledText>
          <StyledText>Murilo</StyledText>
        </StyledView>

        <StyledView className='flex-2 flex-row justify-between'>
          <StyledText>Nome</StyledText>
          <StyledText>Murilo</StyledText>
        </StyledView>

        <StyledView className='flex-2 flex-row justify-between'>
          <StyledText>Nome</StyledText>
          <StyledText>Murilo</StyledText>
        </StyledView>

        <StyledView className='flex-2 flex-row justify-between'>
          <StyledText>Nome</StyledText>
          <StyledText>Murilo</StyledText>
        </StyledView>
      </StyledView>
    </StyledScrollView>
  )
}
