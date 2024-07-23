import { TouchableOpacityProps } from 'react-native'
import { defaultDisciplines } from '../constants/disciplines'

export interface IDisciplineItemProps {
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

export interface IDisciplineTitleProps {
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
