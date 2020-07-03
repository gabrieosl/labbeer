import React from 'react';

import GoogleLogo from '../../assets/google.png';
import { Container, ButtonLogo, ButtonText } from './styles';

const GoogleButton: React.FC = () => {
  return (
    <Container>
      <ButtonLogo source={GoogleLogo} />
      <ButtonText>Continuar com Google</ButtonText>
    </Container>
  );
};

export default GoogleButton;
