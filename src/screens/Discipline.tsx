import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DisciplineTitle } from '../components/DisciplineTitle'
import '../styles/tailwind.css'
import { StyledFlatList, StyledView } from '../styles'
import { Header } from '../components/Header'
import { defaultDisciplines } from '../constants/disciplines'
import { ChapterCard } from '../components/ChapterCard'
import { defaultUser } from '../constants/user'

export function Discipline() {
  const navigation = useNavigation()
  const route = useRoute()

  const { icon, title, discipline } = route.params as {
    icon:
      | 'divide'
      | 'pen'
      | 'flask'
      | 'atom'
      | 'brain'
      | 'book-open'
      | 'globe'
      | 'leaf'
      | 'users'
      | 'language'
      | 'flag'
    title:
      | 'Matemática'
      | 'Português'
      | 'Química'
      | 'Física'
      | 'Filosofia'
      | 'História'
      | 'Geografia'
      | 'Biologia'
      | 'Sociologia'
      | 'Inglês'
      | 'Espanhol'
    discipline: keyof typeof defaultDisciplines
  }

  function handleChapter(
    points: number,
    required_points: number,
    chapter: number
  ) {
    if (points >= required_points) {
      navigation.navigate('Chapter', {
        chapter,
        discipline,
      })
    }
  }

  return (
    <StyledView className='flex-1 flex-col p-4'>
      <Header title='Disciplina' icon='graduation-cap' />
      <DisciplineTitle discipline={title} icon={icon} />
      <StyledFlatList
        showsVerticalScrollIndicator={false}
        data={defaultDisciplines[discipline].chapters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ChapterCard
            chapter_number={(index + 1).toString()}
            chapter_text={item.title}
            icon={
              defaultUser.points[discipline][0] >= index * 10
                ? 'unlock'
                : 'lock'
            }
            onPress={() =>
              handleChapter(
                defaultUser.points[discipline][0],
                index * 10,
                index + 1
              )
            }
          />
        )}
      />
    </StyledView>
  )
}
