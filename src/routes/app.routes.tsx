import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Map from '../pages/Map';
import Home from '../pages/Home';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#f97115" />
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
      initialRouteName="Home"
    >
      <Auth.Screen name="Home" component={Home} />
    </Auth.Navigator>
  </>
);

export default AuthRoutes;
