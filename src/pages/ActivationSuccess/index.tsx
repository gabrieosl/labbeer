import React from 'react';
import { ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import ActivatedLogo from '../../assets/activated_logo.png';

import {
  Container,
  ActivationButton,
  ActivationButtonText,
  H1,
  H2,
} from './styles';

const Activation: React.FC = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Container>
        <Image source={ActivatedLogo} />
        <H1>Parabéns Fulano</H1>
        <H2>
          Sua conta foi ativada com sucesso. Localize seu primeiro bar haha.
        </H2>
        <ActivationButton active onPress={signIn}>
          <ActivationButtonText>Ok</ActivationButtonText>
        </ActivationButton>
      </Container>
    </ScrollView>
  );
};

export default Activation;
