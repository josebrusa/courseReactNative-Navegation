import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/core'

export const PaginaScreen2 = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.globalMargin}>
            <Text>Pagin 2</Text>
            <Button
                title='Ir a Pagina 3'
                onPress={() => navigator.navigate('PaginaScreen3')}
            />
        </View>
    )
}