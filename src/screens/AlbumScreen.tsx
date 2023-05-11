import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/AppTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumScreen = () => {

    const {  logout, authState: { isLoggedIn } } = useContext( AuthContext )
    return (
        <View style={
            styles.globalMargin
        }>
            <Text style={
                styles.title
            }>Album Screen</Text>

            {
                isLoggedIn && (
                    <Button title= 'logout' onPress={ logout } />
                )
            }
        </View>
    )
}

