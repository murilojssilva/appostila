import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '../screens/Auth/SignIn'
import { SignUp } from '../screens/Auth/SignUp'

const Stack = createNativeStackNavigator()

export default function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          title: 'Criar conta',
        }}
      />
    </Stack.Navigator>
  )
}
