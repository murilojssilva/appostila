import { ActionButton } from '../components/ActionButton'
import { Header } from '../components/Header'
import { ProfileDetailsItem } from '../components/ProfileDetailsItem'
import { ProfileRewardsItem } from '../components/ProfileRewardsItem'
import { Title } from '../components/Title'
import { defaultUser } from '../constants/user'
import { StyledScrollView, StyledText, StyledView } from '../styles'

export function Profile() {
  return (
    <StyledScrollView className='flex-1 flex-col'>
      <Header title='Perfil' icon='user' />
      <StyledView className='flex-2 p-4'>
        <Title text='Dados pessoais' />
        <ProfileDetailsItem
          title='Nome completo'
          content={defaultUser.name + ' ' + defaultUser.lastName}
        />

        <ProfileDetailsItem
          title='Nome de usuário'
          content={defaultUser.username}
        />

        <ProfileDetailsItem title='E-mail' content={defaultUser.email} />

        <StyledView className='flex-2 flex-row p-4 gap-2 items-center justify-around'>
          <ActionButton
            text='Editar Perfil'
            icon='pencil'
            iconColor='white'
            textColor='gray-100'
            backgroundColor='cyan-700'
          />

          <ActionButton
            text='Editar Senha'
            icon='save'
            iconColor='white'
            textColor='gray-100'
            backgroundColor='cyan-700'
          />
        </StyledView>
      </StyledView>

      <StyledView className='flex-2 p-4'>
        <Title text='Meus prêmios' />
        <ProfileRewardsItem
          borderColor='lime-500'
          title='Biologia'
          content={defaultUser.points.biology[0]}
        />
        <ProfileRewardsItem
          borderColor='cyan-700'
          title='Química'
          content={defaultUser.points.chemistry[0]}
        />
        <ProfileRewardsItem
          borderColor='white'
          title='Inglês'
          content={defaultUser.points.english[0]}
        />
        <ProfileRewardsItem
          borderColor='[#243c5a]'
          title='Geografia'
          content={defaultUser.points.geography[0]}
        />
        <ProfileRewardsItem
          borderColor='cyan-700'
          title='História'
          content={defaultUser.points.history[0]}
        />
        <ProfileRewardsItem
          borderColor='cyan-700'
          title='Matemática'
          content={defaultUser.points.math[0]}
        />
        <ProfileRewardsItem
          borderColor='cyan-700'
          title='Filosofia'
          content={defaultUser.points.philosophy[0]}
        />
        <ProfileRewardsItem
          borderColor='cyan-700'
          title='Física'
          content={defaultUser.points.physics[0]}
        />
        <ProfileRewardsItem
          borderColor='cyan-700'
          title='Português'
          content={defaultUser.points.portuguese[0]}
        />
        <ProfileRewardsItem
          borderColor='cyan-700'
          title='Sociologia'
          content={defaultUser.points.sociology[0]}
        />
        <ProfileRewardsItem
          borderColor='cyan-700'
          title='Espanhol'
          content={defaultUser.points.spanish[0]}
        />
      </StyledView>
    </StyledScrollView>
  )
}
