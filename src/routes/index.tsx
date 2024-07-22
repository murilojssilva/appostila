import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AppRoutes from './app.routes'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='App' component={AppRoutes} />
    </Stack.Navigator>
  )
}
