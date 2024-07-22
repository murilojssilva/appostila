import React from 'react'
import { useRoute } from '@react-navigation/native'
import { StyledScrollView, StyledText, StyledView } from '../styles'
import { Header } from '../components/Header'
import '../styles/tailwind.css'
import { defaultDisciplines } from '../constants/disciplines'

export function Chapter() {
  const route = useRoute()

  const { chapter, chapter_text, discipline } = route.params as {
    chapter: number
    chapter_text: string
    discipline: keyof typeof defaultDisciplines
  }

  return (
    <StyledScrollView className='flex-1 flex-col p-4'>
      <Header title='Capítulo' icon='graduation-cap' />
      <StyledView className='flex-2 flex-col gap-2 items-center my-8'>
        <StyledText className='text-lg font-bold'>
          Capítulo {chapter}
        </StyledText>
        <StyledText className='text-sm'>{chapter_text}</StyledText>
      </StyledView>
      <StyledView>
        <StyledText className='text-sm'>
          {defaultDisciplines[discipline].chapters[chapter - 1].content}
        </StyledText>
      </StyledView>
    </StyledScrollView>
  )
}
