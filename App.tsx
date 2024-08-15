import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import Routes from './src/routes'
import './src/styles/tailwind.css'
import { DisciplinesProvider } from './src/contexts/DisciplinesContext'

export default function App() {
  return (
    <NavigationContainer>
      <DisciplinesProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <Routes />
      </DisciplinesProvider>
    </NavigationContainer>
  )
}
