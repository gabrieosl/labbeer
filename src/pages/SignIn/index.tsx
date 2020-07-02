import React from 'react';
import { Image, Text, TextInput } from 'react-native';
import { SOME_KEY } from 'react-native-dotenv';

import logo from '../../assets/Logo.png';

import { Container, SignInForm, MoreOptions } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
      <SignInForm>
        <TextInput />
        <TextInput />
      </SignInForm>
      <Text>{SOME_KEY}</Text>
      <MoreOptions />
    </Container>
  );
};

export default SignIn;
