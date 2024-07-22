import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DisciplineCard } from '../components/DisciplineCard'
import { Title } from '../components/Title'
import {
  StyledImage,
  StyledScrollView,
  StyledText,
  StyledView,
} from '../styles'

import logo from '../assets/images/cartaozinho-logo.png'

import '../styles/tailwind.css'
import { IconAction } from '../components/IconAction'
import { MyRewardCard } from '../components/MyRewardsCard'

export function Home() {
  const navigation = useNavigation()

  return (
    <StyledView className='flex-1 bg-white px-8 py-12'>
      <StyledView className='flex-2 flex-row justify-between'>
        <StyledView className='flex-2 flex-row '>
          <StyledImage
            source={logo}
            className='flex-2 flex-row self-center h-8 w-8'
          />
          <StyledText className='text-xl '>APPostila</StyledText>
        </StyledView>
        <IconAction
          onPress={() => navigation.navigate('Profile' as never)}
          icon='user'
        />
      </StyledView>
      <MyRewardCard onPress={() => navigation.navigate('MyRewards')} />

      <Title text='Disciplinas' />
      <StyledScrollView
        showsVerticalScrollIndicator={false}
        className='flex-2 gap-2'
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
      </StyledScrollView>
    </StyledView>
  )
}
