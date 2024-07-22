import { FontAwesome5 } from '@expo/vector-icons'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { defaultUser, totalPoints } from '../constants/user'
import { StyledText, StyledView } from '../styles'
import { DisciplineItem } from '../components/DisciplineItem'

export function MyRewards() {
  return (
    <StyledView className='flex-1'>
      <Header title='Meus pontos' icon='trophy' />

      <StyledView className='flex-2 items-center'>
        <FontAwesome5 name='trophy' color='gold' size={48} />
        <StyledText className='text-bold'>{totalPoints}</StyledText>
      </StyledView>
      <Title text='Disciplinas' />
      <StyledView className='flex-2 p-8'>
        <DisciplineItem
          discipline='Matemática'
          points={defaultUser.points.math[0]}
        />
        <DisciplineItem
          discipline='Português'
          points={defaultUser.points.portuguese[0]}
        />
        <DisciplineItem
          discipline='Química'
          points={defaultUser.points.chemistry[0]}
        />
        <DisciplineItem
          discipline='Física'
          points={defaultUser.points.physics[0]}
        />
        <DisciplineItem
          discipline='Filosofia'
          points={defaultUser.points.philosophy[0]}
        />
        <DisciplineItem
          discipline='História'
          points={defaultUser.points.history[0]}
        />
        <DisciplineItem
          discipline='Geografia'
          points={defaultUser.points.geography[0]}
        />
        <DisciplineItem
          discipline='Biologia'
          points={defaultUser.points.biology[0]}
        />
        <DisciplineItem
          discipline='Sociologia'
          points={defaultUser.points.sociology[0]}
        />
        <DisciplineItem
          discipline='Inglês'
          points={defaultUser.points.english[0]}
        />
        <DisciplineItem
          discipline='Espanhol'
          points={defaultUser.points.spanish[0]}
        />
      </StyledView>
    </StyledView>
  )
}
