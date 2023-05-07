import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';


interface Props {
    iconName: string
}

export const TouchableIcon = ( { iconName }: Props ) => {

    const { changeFavoriteIcon } = useContext( AuthContext )

    return (
        <TouchableOpacity
            onPress={() => changeFavoriteIcon( iconName )}
            style={{
                padding:10
            }}
        >
            <Icon
                style={{
                    width:100,
                    height:100,
                    padding: 30,
                }}
                name={ iconName }
                size={40}
                color={'#7838A8'}
            />
        </TouchableOpacity>
    )
}

