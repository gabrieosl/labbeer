import React from 'react';
import { Image } from 'react-native';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo_small.png';
import coin from '../../assets/coin.png';
import {
  Container,
  Content,
  Aside,
  NameCoins,
  Name,
  Coins,
  Avatar,
  CoinsValue,
} from './styles';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Content>
        <Image source={logo} />
        <Aside>
          <NameCoins>
            <Name>{user.name}</Name>
            <Coins onPress={signOut}>
              <Image source={coin} />
              <CoinsValue>60</CoinsValue>
            </Coins>
          </NameCoins>
          <Avatar source={{ uri: user.avatar }} />
        </Aside>
        {/* <Text>{user.name}</Text> */}
      </Content>
    </Container>
  );
};

export default Header;
