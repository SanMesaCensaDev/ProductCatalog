import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen'
import ProductDetail from './src/screens/ProductDetail'

const Stack = createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Detalles" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
