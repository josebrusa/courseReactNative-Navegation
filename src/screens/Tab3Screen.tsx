import React, { useEffect } from 'react'
import { View, Text } from 'react-native'


export const Tab3Screen = () => {
    useEffect(() => {
        console.log('Tab 3');
        
    }, [])
    return (
        <View style={{ flex:1, backgroundColor:'white'}}>
            <Text>Tab3Screen</Text>
        </View>
    )
}

