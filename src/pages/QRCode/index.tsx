import React from 'react';
import { Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BaseMenu from '../../components/BaseMenu';

import QRCode from '../../assets/QRCode/QRCode.png';
import CloseIcon from '../../assets/close.png';

import { Container, H1, P, CloseButton } from './styles';

const Rewards: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <CloseButton onPress={() => navigation.goBack()}>
          <Image source={CloseIcon} />
        </CloseButton>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('Menu')}
        >
          <ScrollView
            contentContainerStyle={{ alignItems: 'center', width: '100%' }}
          />
          <Image source={QRCode} />
          <H1>QRCode do Bar</H1>
          <P>
            Abra sua câmera, escaneie o QRCode do Bar e tenha acesso ao
            cardápio.
          </P>
          <ScrollView />
        </TouchableOpacity>
      </Container>
      <BaseMenu />
    </>
  );
};

export default Rewards;
