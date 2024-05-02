import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const AppHeader = () => {
    const navigation = useNavigation<any>();

    const handleGoBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            console.log('wrong route');
            
        }
    }

    return (
        <View style={{ height: 48, justifyContent: 'center', }}>
            <TouchableOpacity activeOpacity={1} onPress={handleGoBack}>
                <Text>Go back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AppHeader