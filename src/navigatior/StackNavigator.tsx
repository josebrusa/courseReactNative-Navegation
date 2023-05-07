import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PaginaScreen1 } from '../screens/PaginaScreen1';
import { PaginaScreen2 } from '../screens/PaginaScreen2';
import { PaginaScreen3 } from '../screens/PaginaScreen3';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
    PaginaScreen1: undefined,
    PaginaScreen2: undefined,
    PaginaScreen3: undefined,
    PersonaScreen: { id: number, name: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'trnasparent'
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name='PaginaScreen1' options={{ title: "Pagina 1"}} component={ PaginaScreen1 } />
            <Stack.Screen name='PersonaScreen' component={ PersonaScreen } />
            <Stack.Screen name='PaginaScreen2' options={{ title: "Pagina 2"}} component={ PaginaScreen2 } />
            <Stack.Screen name='PaginaScreen3' options={{ title: "Pagina 3"}} component={ PaginaScreen3 } />
        </Stack.Navigator>
    )
}
