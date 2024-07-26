import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DisciplineCard } from '../components/DisciplineCard'
import { Title } from '../components/Title'
import { StyledScrollView, StyledText, StyledView } from '../styles'
import { IconAction } from '../components/IconAction'
import { MyRewardCard } from '../components/MyRewardsCard'
import { defaultUser } from '../constants/user'

export function Home() {
  const navigation = useNavigation()

  return (
    <StyledView className='flex-1 bg-white'>
      <StyledView className='flex-none flex-row justify-between bg-cyan-700 px-12 py-20 items-center'>
        <StyledView className='flex-none flex-col'>
          <StyledText className='text-md text-gray-100'>APPostila</StyledText>
          <StyledText className='text-xl text-gray-100'>
            Olá,{' '}
            <StyledText className='font-bold text-md text-gray-100'>
              {defaultUser.name}
            </StyledText>
          </StyledText>
        </StyledView>
        <IconAction
          onPress={() => navigation.navigate('Profile' as never)}
          icon='user'
          color='white'
        />
      </StyledView>

      <StyledView className='flex-1 px-8'>
        <MyRewardCard
          onPress={() => navigation.navigate('MyRewards' as never)}
        />
        <StyledView className='my-8' />
        <Title text='Disciplinas' />

        <StyledScrollView
          showsVerticalScrollIndicator={false}
          className='flex-1 gap-2'
        >
          <DisciplineCard
            discipline='Matemática'
            icon='divide'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'Matemática',
                icon: 'divide',
                discipline: 'math',
              })
            }
          />
          <DisciplineCard
            discipline='Português'
            icon='pen'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'Português',
                icon: 'pen',
                discipline: 'portuguese',
              })
            }
          />
          <DisciplineCard
            discipline='Química'
            icon='flask'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'Química',
                icon: 'flask',
                discipline: 'chemistry',
              })
            }
          />
          <DisciplineCard
            discipline='Física'
            icon='atom'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'Física',
                icon: 'atom',
                discipline: 'physics',
              })
            }
          />
          <DisciplineCard
            discipline='Filosofia'
            icon='brain'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'Filosofia',
                icon: 'brain',
                discipline: 'philosophy',
              })
            }
          />
          <DisciplineCard
            discipline='História'
            icon='book-open'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'História',
                icon: 'book-open',
                discipline: 'history',
              })
            }
          />
          <DisciplineCard
            discipline='Geografia'
            icon='globe'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'Geografia',
                icon: 'globe',
                discipline: 'geography',
              })
            }
          />
          <DisciplineCard
            discipline='Biologia'
            icon='leaf'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'Biologia',
                icon: 'leaf',
                discipline: 'biology',
              })
            }
          />
          <DisciplineCard
            discipline='Sociologia'
            icon='users'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'Sociologia',
                icon: 'users',
                discipline: 'sociology',
              })
            }
          />
          <DisciplineCard
            discipline='Inglês'
            icon='language'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'Inglês',
                icon: 'language',
                discipline: 'english',
              })
            }
          />
          <DisciplineCard
            discipline='Espanhol'
            icon='flag'
            onPress={() =>
              navigation.navigate('Discipline', {
                title: 'Espanhol',
                icon: 'flag',
                discipline: 'spanish',
              })
            }
          />
          <StyledView className='mb-4' />
        </StyledScrollView>
      </StyledView>
    </StyledView>
  )
}
