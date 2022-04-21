import React, {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';
import OnboardScreen from './screens/OnboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen?.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboarding"
          component={OnboardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
