import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Map from '../pages/Map';
import Rewards from '../pages/Rewards';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#f97115" />
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
      initialRouteName="Rewards"
    >
      <Auth.Screen name="Rewards" component={Rewards} />
    </Auth.Navigator>
  </>
);

export default AuthRoutes;
