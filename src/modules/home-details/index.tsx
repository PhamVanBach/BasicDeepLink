import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import AppHeader from '../../core/components/app-header';

const HomeDetails = ({ route, navigation }:any) => {
    const { params } = route;

    React.useEffect(() => {
        // Fetch data or perform some action with the id from the deep link
        console.log('data fetched with id', params?.id);
    }, [params]);

    return (
        <View>
            <AppHeader />
            <Text>HomeDetails</Text>
        </View>
    )
}

export default HomeDetails