import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { LateralMenu } from './src/navigatior/LateralMenu';
import { AuthProvider } from './src/context/AuthContext';
// import { StackNavigator } from './src/navigatior/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <LateralMenu />
        {/* <StackNavigator /> */}
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  )

}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}


export default App;
