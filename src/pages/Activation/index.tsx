import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { SOME_KEY } from 'react-native-dotenv';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {
  Container,
  CodeValue,
  ActivationButton,
  ActivationButtonText,
  H1,
  H2,
} from './styles';

const Activation: React.FC = () => {
  const navigation = useNavigation();
  const [activationCode, setActivationCode] = useState('');
  const [codeSentAt, setCodeSentAt] = useState(new Date(2010, 1, 1));
  const [secondsToSendAgain, setSecondsToSendAgain] = useState(0);

  const inputRef = useRef<any>(null);

  const sendActivationCode = useCallback(() => {
    // TODO
    setCodeSentAt(new Date());
    console.log('activation code sent!');
  }, []);

  const handleCheckActivation = useCallback(() => {
    console.log(activationCode);
    navigation.navigate('ActivationSuccess');
  }, [activationCode, navigation]);

  const handleFocus = useCallback(() => {
    inputRef.current.focus();
  }, []);

  const handleChangeText = useCallback(
    newValue => setActivationCode(newValue),
    [],
  );

  const isActivationCodeValid = useMemo(() => {
    return activationCode.length === 6;
  }, [activationCode]);

  const formattedVerificationCode = useMemo(() => {
    const charCount = activationCode.length;
    const fixedNewValue =
      charCount < 6
        ? activationCode + '-'.repeat(6 - charCount)
        : activationCode;
    return fixedNewValue;
  }, [activationCode]);

  useEffect(() => {
    sendActivationCode();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Container>
          <TouchableWithoutFeedback onPress={handleFocus}>
            <H1>Código de Verificação</H1>
            <H2>Foi enviado um código de verificação para (21) 7070-7070</H2>
            <TextInput
              ref={inputRef}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="number-pad"
              returnKeyType="send"
              maxLength={6}
              value={activationCode}
              onChangeText={handleChangeText}
              onSubmitEditing={handleCheckActivation}
              style={{ display: 'none' }}
            />
            <CodeValue>{formattedVerificationCode}</CodeValue>
          </TouchableWithoutFeedback>
          <ActivationButton
            active={isActivationCodeValid}
            onPress={
              (isActivationCodeValid && handleCheckActivation) || undefined
            }
          >
            <ActivationButtonText>Próximo</ActivationButtonText>
          </ActivationButton>
          <TouchableOpacity onPress={() => null}>
            <Text>{`Enviar novamente ${secondsToSendAgain}s`}</Text>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Activation;
