import React from 'react'
import { StyledView, StyledText } from '../styles'

type StatusBarProps = {
  score: number
}

const levels = [
  { label: 'Iniciante', min: 0, max: 1000, color: 'bg-red-500' },
  { label: 'Básico', min: 1001, max: 2500, color: 'bg-orange-500' },
  { label: 'Intermediário', min: 2501, max: 5000, color: 'bg-yellow-500' },
  { label: 'Avançado', min: 5001, max: 7500, color: 'bg-green-700' },
  { label: 'Pro', min: 7501, max: 10000, color: 'bg-blue-800' },
]

const getStatus = (score: number) => {
  return (
    levels.find((level) => score >= level.min && score <= level.max) ||
    levels[0]
  )
}

export const StatusBar: React.FC<StatusBarProps> = ({ score }) => {
  const status = getStatus(score)
  const progress = Math.min(
    ((score - status.min) / (status.max - status.min)) * 100,
    100
  )
  const nextLevel = levels.find((level) => score < level.min)
  const pointsToNextLevel = nextLevel ? nextLevel.min - score : 0

  return (
    <StyledView className='w-full'>
      <StyledText className='text-lg mb-2'>
        Nível: {status.label} ({score} pontos)
      </StyledText>
      <StyledView className='w-full bg-gray-200 h-6 rounded-full overflow-hidden mb-2'>
        <StyledView
          className={`${status.color} h-full`}
          style={{ width: `${progress}%` }}
        />
      </StyledView>
      {nextLevel && (
        <StyledText className='text-sm text-gray-600'>
          Faltam {pointsToNextLevel} pontos para atingir o nível{' '}
          {nextLevel.label}.
        </StyledText>
      )}
    </StyledView>
  )
}
