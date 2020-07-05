import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Activation from '../pages/Activation';
import ActivationSuccess from '../pages/ActivationSuccess';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <>
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
      initialRouteName="SignIn"
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="Activation" component={Activation} />
      <Auth.Screen name="ActivationSuccess" component={ActivationSuccess} />
    </Auth.Navigator>
  </>
);

export default AuthRoutes;
