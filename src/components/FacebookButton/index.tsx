import React from 'react';

import FacebookLogo from '../../assets/fb.png';
import { Container, ButtonLogo, ButtonText } from './styles';

const FacebookButton: React.FC = () => {
  return (
    <Container>
      <ButtonLogo source={FacebookLogo} />
      <ButtonText>Continuar com Facebook</ButtonText>
    </Container>
  );
};

export default FacebookButton;
