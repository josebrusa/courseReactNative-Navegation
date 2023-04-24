import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contact" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumScreen} />
        </Tab.Navigator>
    );
}