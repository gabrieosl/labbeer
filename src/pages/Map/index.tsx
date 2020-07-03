import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// import { SOME_KEY } from 'react-native-dotenv';

import Input from '../../components/Input';
import logo from '../../assets/Logo.png';

import { Container, SignInForm, MoreOptions } from './styles';

interface LocationProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const SignIn: React.FC = () => {
  const [location, setLocation] = useState<LocationProps>({} as LocationProps);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
      console.log(info);
    });
  }, []);

  return (
    <Container>
      <Image source={logo} />
      <SignInForm>
        {/* <Input name="email" />
        <Input name="password" /> */}
      </SignInForm>
      <Text>LALA</Text>
      <MoreOptions />
      <MapView showsUserLocation style={{ height: 400 }} region={location} />
    </Container>
  );
};

export default SignIn;
