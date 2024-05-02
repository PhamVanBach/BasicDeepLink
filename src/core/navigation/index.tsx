import { NavigationContainer, getStateFromPath } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../modules/home';
import Listing from '../../modules/listing';
import HomeDetails from '../../modules/home-details';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

const state = {
  routes: [
    {
      name: 'HomeStack',
      state: {
        routes: [
          {
            name: 'Home',
          },
          {
            name: 'Details',
            params: {
              id: '1',
            },
          },
        ],
      },
    }
  ]
}

const linking: any = {
  prefixes: ['https://reactnativedeeplink.com', 'reactnativedeeplink://'],
  config: {
    screens: {
      HomeStack: {
        screens: {
          Home: 'home',
          Details: 'details/:id'
        }
      },
      ListingStack: 'listing',
    },
  },
  getStateFromPath: (path: string, options?: any) => {
    return state;
  }
};

const FallbackComponent = () => {
  return <Text>Loading...</Text>;
}

const NestedStack = createNativeStackNavigator();

function NestedStackScreen() {
  return (
    <NestedStack.Navigator screenOptions={{
      headerShown: false,
    }} initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={HomeDetails} />
    </NestedStack.Navigator>
  );
}

const MainStack = () => {
  return (
    <NavigationContainer linking={linking} fallback={<FallbackComponent />}>
      <Stack.Navigator initialRouteName='HomeStack' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="HomeStack" component={NestedStackScreen} />
        <Stack.Screen name="ListingStack" component={Listing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
