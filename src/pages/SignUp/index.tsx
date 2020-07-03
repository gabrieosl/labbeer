import React, { useState, useRef, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
// import { SOME_KEY } from 'react-native-dotenv';

import Input from '../../components/Input';
import DateInput from '../../components/DateInput';
import Button from '../../components/Button';
import logo from '../../assets/Logo.png';

import { Container, Form, SignIn, TextNew, TextSignIn } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const telephoneInputRef = useRef<TextInput>(null);
  const cpfInputRef = useRef<TextInput>(null);
  const birthdateInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView>
        <Container>
          <Image source={logo} />
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
              autoCorrect={false}
              autoCapitalize="words"
              keyboardType="default"
              name="name"
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => emailInputRef.current?.focus()}
            />
            <Input
              ref={emailInputRef}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => telephoneInputRef.current?.focus()}
            />
            <Input
              ref={telephoneInputRef}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="phone-pad"
              name="telephone"
              placeholder="Telefone"
              returnKeyType="next"
              onSubmitEditing={() => cpfInputRef.current?.focus()}
            />
            <Input
              ref={cpfInputRef}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="number-pad"
              name="cpf"
              placeholder="CPF"
              returnKeyType="next"
              onSubmitEditing={() => birthdateInputRef.current?.focus()}
            />
            <DateInput
              ref={birthdateInputRef}
              autoCorrect={false}
              name="birthdate"
              placeholder="Data de Nascimento"
              returnKeyType="next"
              keyboardType={undefined}
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
            <Button onPress={() => formRef.current?.submitForm()}>
              Cadastrar
            </Button>
          </Form>
          <SignIn>
            <TextNew>Já possui conta ?</TextNew>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <TextSignIn>Clique aqui</TextSignIn>
            </TouchableOpacity>
          </SignIn>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
