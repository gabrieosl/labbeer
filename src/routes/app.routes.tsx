import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Map from '../pages/Map';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#f97115" />
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
      initialRouteName="Map"
    >
      <Auth.Screen name="Map" component={Map} />
    </Auth.Navigator>
  </>
);

export default AuthRoutes;
