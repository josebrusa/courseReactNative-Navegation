import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any>{};

export const PaginaScreen1 = ({ navigation }: Props) => {
    
    
    return (
        <View style={styles.globalMargin}>
            <Text>Pagina 1</Text>
            <Button
                title='Ir a Pagina 2'
                onPress={() => navigation.navigate('PaginaScreen2')}
            />
        </View>
    )
}
