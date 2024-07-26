import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DisciplineTitle } from '../components/DisciplineTitle'
import { StyledFlatList, StyledView } from '../styles'
import { Header } from '../components/Header'
import { defaultDisciplines } from '../constants/disciplines'
import { ChapterCard } from '../components/ChapterCard'
import { defaultUser } from '../constants/user'
import { IDisciplineItemProps } from '../interfaces/IDisciplinesProps'

import '../styles/tailwind.css'
import { Title } from '../components/Title'

export function Discipline() {
  const navigation = useNavigation()
  const route = useRoute()

  const { icon, title, discipline } = route.params as IDisciplineItemProps

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
      <DisciplineTitle
        colorIcon='black'
        colorText='gray-900'
        discipline={title}
        icon={icon}
      />
      <StyledFlatList
        showsVerticalScrollIndicator={false}
        data={defaultDisciplines[discipline].chapters}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<Title text='Capítulos' />}
        renderItem={({ item, index }) => (
          <StyledView className='py-4 px-2'>
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
          </StyledView>
        )}
      />
    </StyledView>
  )
}
