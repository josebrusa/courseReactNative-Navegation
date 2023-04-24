import React from 'react';
import { Platform, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {
    return Platform.OS === 'android' ? <TabsAndroid /> : <TabsIOS />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

    const TabsAndroid = () => {

        return (
            <BottomTabAndroid.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                    borderColor: 'white',
                    borderTopWidth: 0,
                    elevation: 0
                },  
                    tabBarLabelStyle: {
                    fontSize: 15,
                    elevation: 0
                },
                tabBarIcon: ( { color } ) => {
                
                let iconName: string = '';

                switch( route.name ) {
                    case 'Tab1Screen':
                        iconName = 'T1'
                    break;
                    
                    case 'Tab2Screen':
                        iconName = 'T2'
                    break;

                    case 'StackNavigator':
                        iconName = 'ST'
                    break;
                }

                return <Text style={{ color }}>{ iconName }</Text>
            }
        })}
            >
            <BottomTabAndroid.Screen
                name="Tab1Screen"
                options={{ title: 'Tab 1' }}
                component={Tab1Screen} />
            <BottomTabAndroid.Screen
                name="Tab2Screen"
                options={{ title: 'Tab 2' }}
                component={TopTabNavigator} />
            <BottomTabAndroid.Screen
                name="StackNavigator"
                options={{ title: 'Stack' }}
                component={StackNavigator} />
            </BottomTabAndroid.Navigator>
            )
    }



const BottomTabIOS = createBottomTabNavigator();

    const TabsIOS = () => {

    return (
    <BottomTabIOS.Navigator
        screenOptions={({ route }) => ({
            tabBarStyle: {
                borderColor: 'white',
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle: {
                fontSize: 15,
                elevation: 0
            },
            tabBarIcon: ( { color, focused, size} ) => {
                
                let iconName: string = '';

                switch( route.name ) {
                    case 'Tab1Screen':
                        iconName = 'T1'
                    break;
                    
                    case 'Tab2Screen':
                        iconName = 'T2'
                    break;

                    case 'StackNavigator':
                        iconName = 'Stack'
                    break;
                }

                return <Text style={{ color }}>{ iconName }</Text>
            }
        })}
    >
        <BottomTabIOS.Screen
            name="Tab2Screen"
            options={{ title: 'Tab 2' }}
            component={TopTabNavigator} />
        <BottomTabIOS.Screen
            name="Tab1Screen"
            options={{ title: 'Tab 1' }}
            component={Tab1Screen} />
        <BottomTabIOS.Screen
            name="StackNavigator"
            options={{ title: 'Stack' }}
            component={StackNavigator} />
    </BottomTabIOS.Navigator>
    );
};
