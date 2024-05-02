import React from 'react';
import MainStack from './core/navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

  return <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <MainStack />
    </SafeAreaView>
  </SafeAreaProvider>;
};

export default App;
