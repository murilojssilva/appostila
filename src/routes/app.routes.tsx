import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Chapter } from '../screens/Chapter'
import { Discipline } from '../screens/Discipline'
import { Home } from '../screens/Home'
import { Profile } from '../screens/Profile'
import { MyRewards } from '../screens/MyRewards'

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{
          title: 'Perfil',
        }}
      />
      <Stack.Screen
        name='MyRewards'
        component={MyRewards}
        options={{
          title: 'Meus pontos',
        }}
      />
      <Stack.Screen
        name='Discipline'
        component={Discipline}
        options={{
          title: 'Disciplina',
        }}
      />
      <Stack.Screen
        name='Chapter'
        component={Chapter}
        options={{
          title: 'Capítulo',
        }}
      />
    </Stack.Navigator>
  )
}
