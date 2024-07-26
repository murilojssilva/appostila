import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName='Auth'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='App' component={AppRoutes} />
      <Stack.Screen name='Auth' component={AuthRoutes} />
    </Stack.Navigator>
  )
}
