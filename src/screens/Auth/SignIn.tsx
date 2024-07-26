import { useNavigation } from '@react-navigation/native'
import { ActionButton } from '../../components/ActionButton'
import { InputText } from '../../components/InputText'
import logo from '../../assets/images/logo.png'
import {
  StyledImage,
  StyledKeyboardAvoidingView,
  StyledText,
  StyledView,
} from '../../styles'
import { Platform } from 'react-native'

export function SignIn() {
  const navigation = useNavigation()
  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1 bg-gray-100 justify-center'
    >
      <StyledView className='flex-1 justify-center items-center'>
        <StyledImage
          source={logo}
          className='flex-2 flex-row self-center h-32 w-32'
        />
        <StyledText className='text-cyan-700 font-bold text-2xl'>
          Appostila
        </StyledText>
      </StyledView>

      <StyledView className='flex-1 justify-between gap-4 p-8'>
        <StyledText className='text-xl mb-4'>Acesse sua conta</StyledText>
        <InputText text='E-mail' keyboardType='email-address' />
        <InputText text='Senha' secureTextEntry />
        <ActionButton
          text='Acessar conta'
          backgroundColor='cyan-700'
          textColor='gray-100'
          icon='sign-in-alt'
          iconColor='white'
          onPress={() => navigation.navigate('App', { screen: 'Home' })}
        />
      </StyledView>

      <StyledView className='flex-1 justify-center p-8 items-center'>
        <StyledText className='text-xl mb-4'>Ainda não tem conta?</StyledText>
        <ActionButton
          text='Criar conta'
          backgroundColor='gray-300'
          textColor='cyan-700'
          icon='log-in'
          iconColor='#0E7490'
          onPress={() => navigation.navigate('SignUp' as never)}
        />
      </StyledView>
    </StyledKeyboardAvoidingView>
  )
}
