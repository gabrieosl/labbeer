import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Map from '../pages/Map';
import Home from '../pages/Home';
import Rewards from '../pages/Rewards';
import Bar from '../pages/Bar';
import QRCode from '../pages/QRCode';
import Menu from '../pages/Menu';
import Order from '../pages/Order';

type RootStackParamList = {
  Map: undefined;
  Home: undefined;
  Rewards: undefined;
  Bar: { barId: number };
  QRCode: undefined;
};

const Auth = createStackNavigator<RootStackParamList>();

const AuthRoutes: React.FC = () => (
  <>
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
      initialRouteName="Home"
    >
      <Auth.Screen name="Map" component={Map} />
      <Auth.Screen name="Home" component={Home} />
      <Auth.Screen name="Rewards" component={Rewards} />
      <Auth.Screen name="Bar" component={Bar} />
      <Auth.Screen name="QRCode" component={QRCode} />
      <Auth.Screen name="Menu" component={Menu} />
      <Auth.Screen name="Order" component={Order} />
    </Auth.Navigator>
  </>
);

export default AuthRoutes;
