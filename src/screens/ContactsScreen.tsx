import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/AppTheme'
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const { signIn, authState : { isLoggedIn } } = useContext( AuthContext )

    return (
        <View style={ styles.globalMargin } >
            <Text style={ styles.title }>Contact Screen</Text>


            {
                !isLoggedIn
                    ? <Button title= 'SignIn' onPress={ signIn } />
                    : <Button title='Get Out' onPress={ () =>  console.log('click para realizar el singOut')} />
            }
        </View>
    )
}

