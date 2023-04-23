import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any>{};

export const PaginaScreen1 = ({ navigation }: Props) => {
    

    return (
        <View style={styles.globalMargin}>
            <Text style={ styles.title } >Pagina 1</Text>
            <Button
                title='Ir a Pagina 2'
                onPress={() => navigation.navigate('PaginaScreen2')}
            />
<Text>ir a Perfil</Text>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('PersonaScreen', {
                    id:1,
                    name: 'jose'
                })}
            >
                <Text>Got to profile</Text>
            </TouchableOpacity>
        </View>
    )
}
