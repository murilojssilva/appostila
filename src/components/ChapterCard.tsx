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
          className={`font-bold text-xl text-${icon ? 'gray-400' : 'gray-300'}`}
        >
          Capítulo {chapter_number}
        </StyledText>
        <StyledText
          className={`font-bold text-sm text-${icon ? 'gray-400' : 'gray-300'}`}
        >
          {chapter_text}
        </StyledText>
      </StyledView>
      <FontAwesome5
        name={icon}
        color={icon === 'lock' ? 'gray' : 'white'}
        size={20}
      />
    </StyledTouchableOpacity>
  )
}
