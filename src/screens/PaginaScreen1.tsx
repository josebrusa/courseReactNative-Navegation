import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { styles } from '../theme/AppTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';

// interface Props extends StackScreenProps<any, any>{};

interface Props extends DrawerScreenProps<any, any>{};

export const PaginaScreen1 = ({ navigation }: Props) => {
    
    useEffect(() => {
        navigation.setOptions({
            headerLeft:() => (<Button title='Menu' onPress={ () => navigation.toggleDrawer() }/>)
        })

    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={ styles.title } >Pagina 1</Text>
            <Button
                title='Ir a Pagina 2'
                onPress={() => navigation.navigate('PaginaScreen2')}
            />
            <Text style={ styles.title } >ir a Perfil</Text>
            
            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id:1,
                        name: 'jose'
                    })}
                >
                    <Text style={ styles.btnText } >jose</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id:2,
                        name: 'Maria'
                    })}
                >
                    <Text style={ styles.btnText } >Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
