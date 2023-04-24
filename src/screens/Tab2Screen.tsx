import React, { useEffect } from 'react'
import { View, Text } from 'react-native'


export const Tab2Screen = () => {

    useEffect(() => {
        console.log('Tab 2');
        
    }, [])
    return (
        <View style={{ flex:1, backgroundColor:'white'}}>
            <Text>TabS2creen</Text>
        </View>
    )
}

