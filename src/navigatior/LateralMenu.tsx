import React from 'react'
import { DrawerContentComponentProps, createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { SettingsScreen } from '../screens/SettingsScreen';
// import { StackNavigator } from './StackNavigator';
import {View, Image, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
        drawerContent={ (props) => <MenuInterno {...props}/>}
        >
            <Drawer.Screen name='Tabs' component={ Tabs } />
            {/* <Drawer.Screen name='StackNavigator' component={ StackNavigator } /> */}
            <Drawer.Screen name='SettingsScreen' component={ SettingsScreen } />
        </Drawer.Navigator>
    )
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            {/* avatar icon */}
            <View style={ styles.avatarContainer } >
                <Image
                    source= {{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                    }}
                    style={ styles.avatar }
                />
            </View>

            {/* menu options */}
            <View style={ styles.menuContainer}>

                <TouchableOpacity 
                    onPress={ () => navigation.navigate('Tabs')}
                    style={ styles.menuBtn}>
                    <Text style={ styles.menuText }>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={ () => navigation.navigate('SettingsScreen')}
                    style={ styles.menuBtn}>
                    <Text style={ styles.menuText }>Ajustes</Text>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>
    )
}
