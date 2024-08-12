import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Header } from '../components/Header'
import { StyledText, StyledView, StyledScrollView } from '../styles'
import { defaultDisciplines } from '../constants/disciplines'
import { QuestionList } from '../components/QuestionList'
import { ActionButton } from '../components/ActionButton'
import { Alert } from 'react-native'

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
    const totalQuestions = chapterData.questions.length
    const answeredQuestions = Object.keys(answers).length

    if (answeredQuestions < totalQuestions) {
      Alert.alert(
        'Erro ao submeter respostas',
        'Por favor, responda todas as perguntas antes de submeter.'
      )
      return
    }

    const correctAnswers = chapterData.questions.map(
      (q, index) => q.correctAnswer
    )
    const userAnswers = Object.values(answers)
    const correctCount = correctAnswers.reduce((count, answer, index) => {
      return answer === userAnswers[index] ? count + 1 : count
    }, 0)

    const score = (correctCount / totalQuestions) * 10
    const isCorrect = correctAnswers.every(
      (answer, index) => answer === userAnswers[index]
    )

    Alert.alert(
      correctCount === totalQuestions
        ? 'Parabéns. Todas as respostas estão corretas!'
        : `Você tirou ${score.toFixed(
            1
          )} (${correctCount} de ${totalQuestions} acertos).`
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
          text=' Verificar respostas'
          backgroundColor='cyan-700'
          icon='checkbox'
          iconColor='white'
          textColor='gray-100'
          onPress={handleSubmit}
        />
      </StyledView>
    </StyledScrollView>
  )
}
