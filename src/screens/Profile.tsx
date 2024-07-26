import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { defaultUser } from '../constants/user'
import { StyledScrollView, StyledText, StyledView } from '../styles'

export function Profile() {
  return (
    <StyledScrollView className='flex-1 flex-col'>
      <Header title='Perfil' icon='user' />
      <StyledView className='flex-2 p-4'>
        <Title text='Dados pessoais' />
        <StyledView className='flex-2 flex-row justify-between'>
          <StyledText>Nome Completo</StyledText>
          <StyledText>
            {defaultUser.name} {defaultUser.lastName}
          </StyledText>
        </StyledView>

        <StyledView className='flex-2 flex-row justify-between'>
          <StyledText>Nome de usuário</StyledText>
          <StyledText>{defaultUser.username}</StyledText>
        </StyledView>

        <StyledView className='flex-2 flex-row justify-between'>
          <StyledText>E-mail</StyledText>
          <StyledText>{defaultUser.email}</StyledText>
        </StyledView>
      </StyledView>
    </StyledScrollView>
  )
}
