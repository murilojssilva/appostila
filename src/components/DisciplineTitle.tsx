import { Text, View } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'

import '../styles/tailwind.css'

interface IDisciplineTitleProps {
  discipline:
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
}

export function DisciplineTitle({ discipline, icon }: IDisciplineTitleProps) {
  return (
    <View className='flex-2 flex-col items-center gap-4 p-8'>
      <FontAwesome5 name={icon} size={32} color='white' />
      <Text className='font-bold text-gray-400'>{discipline}</Text>
    </View>
  )
}
