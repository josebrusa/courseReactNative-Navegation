import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/AppTheme';

import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab 1');
        
    }, [])

    return (
        <View style={{
            flex: 1,
        }}
            >
            <Text style={styles.title}>Icon</Text>
            <Text style={{
                flex:1,
                margin:10
            }}>
                <TouchableIcon iconName="rocket-outline"/>
                <TouchableIcon iconName="add-outline" />
                <TouchableIcon iconName="american-football-outline" />
                <TouchableIcon iconName="git-compare-outline" />
                <TouchableIcon iconName="rocket-outline"/>
                <TouchableIcon iconName="add-outline" />
                <TouchableIcon iconName="american-football-outline" />
                <TouchableIcon iconName="git-compare-outline" />
            </Text>
        </View>
    )
}

