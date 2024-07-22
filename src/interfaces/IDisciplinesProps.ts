import { TouchableOpacityProps } from 'react-native'

export interface IDisciplineProps extends TouchableOpacityProps {
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
