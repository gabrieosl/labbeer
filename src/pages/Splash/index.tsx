import React from 'react';
import { View, Image, Text } from 'react-native';

// import { Container } from './styles';
import logo from '../../assets/Logo_white.png';

const Splash: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F97115',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image source={logo} />
      <Text
        style={{
          marginTop: 20,
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          textAlign: 'center',

          color: '#FFFFFF',
        }}
      >
        O programa de fidelidade
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          textAlign: 'center',

          color: '#FFFFFF',
        }}
      >
        que cabe no seu bolso!
      </Text>
    </View>
  );
};

export default Splash;
