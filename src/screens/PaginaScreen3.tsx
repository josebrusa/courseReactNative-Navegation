import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack' 

interface Props extends StackScreenProps<any, any>{}

export const PaginaScreen3 = ({ navigation }: Props ) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={ styles.title } >Pagina 3</Text>
            <Button
                title='Regresar'
                onPress={() => navigation.goBack()}
            />

            <Button
                title='ir a Home'
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}