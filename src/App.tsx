import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {View, Text, SafeAreaView} from 'react-native';

export default function App() {
  useEffect(() => {
    SplashScreen?.hide();
  });

  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  );
}
