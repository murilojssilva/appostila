import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Header } from '../components/Header'
import { StyledText, StyledView, StyledScrollView } from '../styles'
import { defaultDisciplines } from '../constants/disciplines'
import { QuestionList } from '../components/QuestionList'
import { ActionButton } from '../components/ActionButton'

export function Survey() {
  const navigation = useNavigation()
  const route = useRoute()

  const { chapter, discipline } = route.params as {
    chapter: number
    discipline: keyof typeof defaultDisciplines
  }

  const disciplineData = defaultDisciplines[discipline]
  const chapterData = disciplineData.chapters.find(
    (chap) => chap.chapter === chapter
  )

  const [answers, setAnswers] = useState<Record<number, string>>({})

  if (!chapterData) {
    return (
      <StyledView>
        <Header title='Questionário' icon='clipboard-list' />
        <StyledView style={{ padding: 20 }}>
          <StyledText>Capítulo não encontrado.</StyledText>
        </StyledView>
      </StyledView>
    )
  }

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionIndex]: answer }))
  }

  const handleSubmit = () => {
    const correctAnswers = chapterData.questions.map(
      (q, index) => q.correctAnswer
    )
    const userAnswers = Object.values(answers)
    const isCorrect = correctAnswers.every(
      (answer, index) => answer === userAnswers[index]
    )

    alert(
      isCorrect
        ? 'Todas as respostas estão corretas!'
        : 'Algumas respostas estão incorretas.'
    )
    navigation.navigate('Discipline', { discipline })
  }

  return (
    <StyledScrollView className='flex-1'>
      <Header title='Questionário' icon='clipboard-list' />
      <StyledView style={{ padding: 20 }}>
        <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
          {chapterData.title}
        </StyledText>
        <QuestionList
          questions={chapterData.questions}
          onAnswerChange={handleAnswerChange}
          answers={answers}
        />
        <ActionButton
          text='Verificar respostas'
          backgroundColor='blue-500'
          icon='checkbox'
          iconColor='white'
          textColor='white'
          onPress={handleSubmit}
        />
      </StyledView>
    </StyledScrollView>
  )
}
