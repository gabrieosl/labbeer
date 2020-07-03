import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Map from '../pages/Map';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
    initialRouteName="Map"
  >
    <Auth.Screen name="Map" component={Map} />
  </Auth.Navigator>
);

export default AuthRoutes;
