import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();


export const TopTabNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets();
    return (
        <Tab.Navigator
            sceneContainerStyle= {{
                backgroundColor:'white',
            }}
            style={{
                paddingTop,
            }}
            screenOptions = {({ route }) => ({
                tabBarIndicatorStyle: {
                backgroundColor: '#7838A8',
            },
                tabBarStyle: {
                    elevation: 0,
            },
                tabBarLabelStyle:{
                    fontSize:11,
            },
                tabBarPressColor:'rgba(120, 56, 168, 0.4)',
                tabBarShowIcon: true,
                tabBarActiveTintColor: '#7838A8',
                tabBarInactiveTintColor:'black',

            tabBarIcon:({ color, focused }) => {
                
                let iconName: string = ''
                switch( route.name ){
                    case 'Chat':
                        iconName = 'chatbubble-outline'
                    break;
                    
                    case 'Contacts':
                        iconName = 'people-outline'
                    break;
                    
                    case 'Albums':
                        iconName = 'albums-outline'
                    break;
                }
                return <Icon name={ iconName } size={25} color={ color = '#7838A8'}/>
            }

        })}
            >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumScreen} />
        </Tab.Navigator>
    );
}