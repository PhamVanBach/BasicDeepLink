import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AppHeader from '../../core/components/app-header';

const Home = () => {
  const navigation = useNavigation<any>();
  const handleGoToListing = () => {
    navigation.navigate('ListingStack');

  }
  const handleGoToDetail = () => {
    navigation.navigate('Details');
  }

  return (
    <View>
      <TouchableOpacity onPress={handleGoToListing}>
        <Text>Go to listing</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGoToDetail}>
        <Text>Go to details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
