import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {Text, SafeAreaView} from 'react-native';

export default function App() {
  useEffect(() => {
    SplashScreen?.hide();
  });

  return (
    <SafeAreaView>
      <Text>Ap</Text>
    </SafeAreaView>
  );
}
