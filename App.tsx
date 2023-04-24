import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { LateralMenu } from './src/navigatior/LateralMenu';
import { TabsIOS } from './src/navigatior/Tabs';
// import { StackNavigator } from './src/navigatior/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <LateralMenu />
      {/* <StackNavigator /> */}
      {/* <Tabs /> */}
    </NavigationContainer>
  )

}

export default App;
