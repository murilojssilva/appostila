import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StyledScrollView, StyledText, StyledView } from '../styles'
import { Header } from '../components/Header'
import '../styles/tailwind.css'
import { defaultDisciplines } from '../constants/disciplines'
import { ActionButton } from '../components/ActionButton'

export function Chapter() {
  const navigation = useNavigation()
  const route = useRoute()

  const { chapter, chapter_text, discipline } = route.params as {
    chapter: number
    chapter_text: string
    discipline: keyof typeof defaultDisciplines
  }

  return (
    <StyledView className='flex-1 flex-col py-4'>
      <StyledScrollView className='flex-2'>
        <Header title='Capítulo' icon='graduation-cap' />

        <StyledView className='flex-2 flex-col gap-2 items-center my-8'>
          <StyledText className='text-lg font-bold'>
            Capítulo {chapter}
          </StyledText>
          <StyledText className='text-sm'>{chapter_text}</StyledText>
        </StyledView>
        <StyledView className='px-4'>
          <StyledText className='text-sm'>
            {defaultDisciplines[discipline].chapters[chapter - 1].content}
          </StyledText>
        </StyledView>
      </StyledScrollView>
      <StyledView className='p-4'>
        <ActionButton
          text='Ver questões'
          icon='clipboard-list'
          backgroundColor='cyan-700'
          textColor='white'
          iconColor='white'
          onPress={() =>
            navigation.navigate('Survey', {
              discipline,
              chapter,
              chapter_text,
            })
          }
        />
      </StyledView>
    </StyledView>
  )
}
