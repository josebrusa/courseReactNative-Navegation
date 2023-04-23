import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme/AppTheme'



export const PaginaScreen2 = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Atras',
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title } >Pagina 2</Text>
            
            <Button
                title='Ir a Pagina 3'
                onPress={ () => navigation.navigate('PaginaScreen3') }
                
                />
        </View>
    )
}