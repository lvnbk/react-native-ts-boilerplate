import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomePage } from '@screens/home'

const StackNavigation = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigation.Screen name="Home" component={HomePage} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  )
}

export { RootNavigation }
