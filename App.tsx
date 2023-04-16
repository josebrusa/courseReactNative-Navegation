import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigatior/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )

}

export default App;
