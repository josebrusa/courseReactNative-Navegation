import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigatior/StackNavigator';

// interface RouteParams {
//     id: number,
//     name: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ({ route, navigation }: Props) => {


    // const params = route.params as RouteParams;
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        })
    })
        return (
            <View style={ styles.globalMargin }>
                <Text style={ styles.title }> {JSON.stringify(params, null, 3)}</Text>
            </View>
        )
}

