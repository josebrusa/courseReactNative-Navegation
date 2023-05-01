import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native'


const Tab = createMaterialTopTabNavigator();


export const TopTabNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            
            sceneContainerStyle= {{
            backgroundColor:'white',
            
        }}
        style={{
            backgroundColor:'white',
            paddingTop,
            
        }}
        screenOptions = {({ route }) => ({
            tabBarActiveTintColor: '#7838A8',
            tabBarInactiveTintColor: '#09181B',
            tabBarIndicatorStyle: {
                backgroundColor: '#7838A8'
            },
            tabBarStyle: {
                elevation: 0
            },
            tabBarLabelStyle: {
                elevation:0
            },
            tabBarIcon:({ color, focused }) => {
                
                let iconName: string = '';
                switch( route.name ){
                    case 'Chat':
                        iconName = 'ch'
                    break;
                    
                    case 'Contacts':
                        iconName = 'ct'
                    break;
                    
                    case 'Albums':
                        iconName = 'al'
                    break;
                }
                return <Text style={{ color: '#7838A8' }}>{ iconName }</Text>
            }

        })}
            >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumScreen} />
        </Tab.Navigator>
    );
}