import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../theme/AppTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
// import { StackScreenProps } from '@react-navigation/stack';

// interface Props extends StackScreenProps<any, any>{};

interface Props extends DrawerScreenProps<any, any>{};

export const PaginaScreen1 = ({ navigation }: Props) => {
    
    useEffect(() => {
        navigation.setOptions({
            headerLeft:() => (
                <TouchableOpacity 
                    style={{
                        marginLeft: 10
                    }}
                    onPress={ () => navigation.toggleDrawer() }
                >
                    <Icon
                        name='menu-outline'
                        color={'#7838A8'}
                        size={35}
                    />
                </TouchableOpacity>
            )
        })

    }, [])


    return (
        <View style={{...styles.globalMargin}}>
            <Text style={ styles.title } >Pagina 1</Text>
            <Button
                title='Ir a Pagina 2'
                onPress={() => navigation.navigate('PaginaScreen2')}
            />
            <Text style={ styles.title } >ir a Perfil</Text>
            
            <Text style={{ width: 370, height:600}}>
                <TouchableOpacity
                    style={{ ...styles.botonGrande, marginBottom:5}}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id:1,
                        name: 'jose'
                    })}
                >
                    <Icon
                        name='person-circle-outline'
                        color={'#E1DD8F'}
                        size={35}
                    />
                    <Text style={ styles.btnText } >jose</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id:2,
                        name: 'Maria'
                    })}
                >
                    <Icon
                        name='person-circle-outline'
                        color={'#E1DD8F'}
                        size={35}
                    />
                    <Text style={ styles.btnText } >Maria</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id:3,
                        name: 'Marcos'
                    })}
                >
                    <Icon
                        name='person-circle-outline'
                        color={'#E1DD8F'}
                        size={35}
                    />
                    <Text style={ styles.btnText } >Marcos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id:4,
                        name: 'Pepe'
                    })}
                >
                    <Icon
                        name='person-circle-outline'
                        color={'#E1DD8F'}
                        size={35}
                    />
                    <Text style={ styles.btnText } >Pepe</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id:5,
                        name: 'Miqueas'
                    })}
                >
                    <Icon
                        name='person-circle-outline'
                        color={'#E1DD8F'}
                        size={35}
                    />
                    <Text style={ styles.btnText } >Miqueas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id:6,
                        name: 'Eva'
                    })}
                >
                    <Icon
                        name='person-circle-outline'
                        color={'#E1DD8F'}
                        size={35}
                    />
                    <Text style={ styles.btnText } >Eva</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id:7,
                        name: 'Catalina'
                    })}
                >
                    <Icon
                        name='person-circle-outline'
                        color={'#E1DD8F'}
                        size={35}
                    />
                    <Text style={ styles.btnText } >Catalina</Text>
                </TouchableOpacity>
                
            </Text>
        </View>
    )
}
