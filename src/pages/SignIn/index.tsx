import React, { useRef, useCallback } from 'react';
import { Image, TextInput, TouchableOpacity } from 'react-native';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
// import { SOME_KEY } from 'react-native-dotenv';

import Input from '../../components/Input';
import Button from '../../components/Button';
import GoogleButton from '../../components/GoogleButton';
import FacebookButton from '../../components/FacebookButton';
import logo from '../../assets/Logo.png';

import {
  Container,
  Form,
  MoreOptions,
  SignUp,
  TextNew,
  TextSignUp,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(data => {
    console.log(data);
    navigation.navigate('Activation');
  }, []);

  return (
    <Container>
      <Image source={logo} />
      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email"
          placeholder="E-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
        />
        <Input
          ref={passwordInputRef}
          secureTextEntry
          name="password"
          placeholder="Senha"
          returnKeyType="send"
          onSubmitEditing={() => formRef.current?.submitForm()}
        />
        <Button onPress={() => formRef.current?.submitForm()}>Login</Button>
      </Form>
      <MoreOptions>Entre com</MoreOptions>
      <GoogleButton />
      <FacebookButton />
      <SignUp>
        <TextNew>Novo?</TextNew>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <TextSignUp>Crie uma conta agora</TextSignUp>
        </TouchableOpacity>
      </SignUp>
    </Container>
  );
};

export default SignIn;
