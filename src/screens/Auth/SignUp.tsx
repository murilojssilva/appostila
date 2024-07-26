import { useNavigation } from '@react-navigation/native'
import { ActionButton } from '../../components/ActionButton'
import { Header } from '../../components/Header'
import { InputText } from '../../components/InputText'
import {
  StyledImage,
  StyledKeyboardAvoidingView,
  StyledScrollView,
  StyledText,
  StyledView,
} from '../../styles'
import { Platform } from 'react-native'

export function SignUp() {
  const navigation = useNavigation()
  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1 bg-gray-100 justify-center'
    >
      <StyledScrollView className='flex-1 bg-gray-100'>
        <Header title='Cadastro' icon='sign-in-alt' />

        <StyledView className='flex-1 justify-around gap-4 p-8'>
          <StyledText className='text-xl mb-4'>Informe seus dados</StyledText>
          <InputText text='Nome' />

          <InputText text='Sobrenome' />
          <InputText text='Nome de usuário' />
          <InputText text='E-mail' />
          <InputText text='Senha' secureTextEntry />
          <InputText text='Confirme sua senha' secureTextEntry />
        </StyledView>
      </StyledScrollView>
      <StyledView className='flex-2 p-8'>
        <ActionButton
          text='Criar conta'
          backgroundColor='cyan-700'
          textColor='gray-100'
          icon='sign-in-alt'
          iconColor='white'
          onPress={() => navigation.navigate('App', { screen: 'Home' })}
        />
        <ActionButton
          text='Voltar'
          backgroundColor='gray-300'
          textColor='cyan-700'
          icon='chevron-back'
          iconColor='#0E7490'
          onPress={() => navigation.goBack()}
        />
      </StyledView>
    </StyledKeyboardAvoidingView>
  )
}
