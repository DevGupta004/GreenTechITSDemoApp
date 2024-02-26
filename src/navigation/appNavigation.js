import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigationScreen from './BottomTabNavigation';
import LoginScreen from '../screens/LoginScreen/loginScreen';
import RegisterScreen from '../screens/RegisterScreen/registerScreen';
import SplashScreen from '../screens/SplashScreen/splashScreen';
import VerifyOTPScreen from '../screens/OtpScreen/verifyOtpScreen';

const Stack = createStackNavigator();

export default AppNavigation = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false,
      animation: 'fade_from_bottom',
      contentStyle: {
        backgroundColor: 'red',
      },
    }}>
    
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{
        headerShown: false,
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      }}
    />
    
    <Stack.Screen
      name="App"
      component={BottomNavigationScreen}
      options={{
        headerShown: false,
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      }}
    />

    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: false,
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        headerShown: false,
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      }}
    />
    <Stack.Screen
      name="VerifyOTP"
      component={VerifyOTPScreen}
      options={{
        headerShown: false,
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      }}
    />
  </Stack.Navigator>
);
