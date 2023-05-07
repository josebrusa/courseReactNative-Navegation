import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/AppTheme';

import Icon from 'react-native-vector-icons/Ionicons';



export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab 1');
        
    }, [])

    return (
        <View style={{
            backgroundColor:'white',
            flex: 1
        }}
            >
            <Text style={ styles.title}>Icon</Text>
            <Text>
                <Icon name="rocket-outline" size={80} color={'red'}/>
                <Icon name="add-outline" size={80} color={'red'}/>
                <Icon name="american-football-outline" size={80} color={'red'}/>
                <Icon name="git-compare-outline" size={80} color={'red'}/>
            </Text>
        </View>
    )
}

