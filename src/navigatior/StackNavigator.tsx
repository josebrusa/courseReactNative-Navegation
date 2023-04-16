import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PaginaScreen1 } from '../screens/PaginaScreen1';
import { PaginaScreen2 } from '../screens/PaginaScreen2';
import { PaginaScreen3 } from '../screens/PaginaScreen3';

const Stack = createStackNavigator();


export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='PaginaScreen1' component={ PaginaScreen1 } />
            <Stack.Screen name='PaginaScreen2' component={ PaginaScreen2 } />
            <Stack.Screen name='PaginaScreen3' component={ PaginaScreen3 } />
        </Stack.Navigator>
    )
}
