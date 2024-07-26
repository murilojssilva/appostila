import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import { StyledText, StyledTouchableOpacity, StyledView } from '../styles'

import '../styles/tailwind.css'

interface IChapterProps extends TouchableOpacityProps {
  chapter_number: string
  chapter_text: string
  icon: 'lock' | 'unlock'
}

export function ChapterCard({
  chapter_number,
  chapter_text,
  icon,
  ...props
}: IChapterProps) {
  return (
    <StyledTouchableOpacity
      {...props}
      className='flex-2 flex-row justify-between items-center'
    >
      <StyledView className='flex-2 flex-col '>
        <StyledText
          className={`font-bold text-xl text-${
            icon === 'lock' ? 'gray-300' : 'gray-900'
          }`}
        >
          Capítulo {chapter_number}
        </StyledText>
        <StyledText
          className={`font-bold text-sm text-${
            icon === 'lock' ? 'gray-300' : 'gray-400'
          }`}
        >
          {chapter_text}
        </StyledText>
      </StyledView>
      <FontAwesome5
        name={icon}
        color={icon === 'lock' ? '#D1D5DB' : '#111827'}
        size={20}
      />
    </StyledTouchableOpacity>
  )
}
