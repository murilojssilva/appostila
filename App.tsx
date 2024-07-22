import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import Routes from './src/routes'
import './src/styles/tailwind.css'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </NavigationContainer>
  )
}
