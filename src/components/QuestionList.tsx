// QuestionList.tsx
import React from 'react'
import { StyledText, StyledView, StyledTouchableOpacity } from '../styles'

interface Option {
  option: string
  text: string
}

interface Question {
  question: string
  options: Option[]
  correctAnswer: string
}

interface QuestionListProps {
  questions: Question[]
  onAnswerChange: (questionIndex: number, answer: string) => void
  answers: Record<number, string>
}

export function QuestionList({
  questions,
  onAnswerChange,
  answers,
}: QuestionListProps) {
  return (
    <StyledView>
      {questions.map((question, questionIndex) => (
        <StyledView key={questionIndex} style={{ marginBottom: 20 }}>
          <StyledText style={{ fontWeight: 'bold', marginBottom: 10 }}>
            {question.question}
          </StyledText>
          {question.options.map((opt) => (
            <StyledTouchableOpacity
              key={opt.option}
              onPress={() => onAnswerChange(questionIndex, opt.option)}
              style={{
                backgroundColor:
                  answers[questionIndex] === opt.option
                    ? '#e0e0e0'
                    : 'transparent',
                padding: 10,
                borderRadius: 5,
                marginBottom: 5,
              }}
            >
              <StyledText>{`${opt.option.toUpperCase()}. ${
                opt.text
              }`}</StyledText>
            </StyledTouchableOpacity>
          ))}
        </StyledView>
      ))}
    </StyledView>
  )
}
