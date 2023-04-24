import React, { useEffect } from 'react'
import { View, Text } from 'react-native'


export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab 1');
        
    }, [])

    return (
        <View style={{ flex:1, backgroundColor:'white'}}>
            <Text>Tab1Screen</Text>
        </View>
    )
}

