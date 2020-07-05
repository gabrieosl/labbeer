import React from 'react';
import { Image } from 'react-native';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo_small.png';
import coin from '../../assets/coin.png';
import notificationIcon from '../../assets/Notification.png';
import {
  Container,
  Content,
  Notifications,
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
        <Avatar source={{ uri: user.avatar }} />
        <NameCoins>
          <Name>{user.name}</Name>
          <Coins onPress={signOut}>
            <CoinsValue>1.434 pontos e 350 selos</CoinsValue>
          </Coins>
        </NameCoins>
        <Notifications source={notificationIcon} />
      </Content>
    </Container>
  );
};

export default Header;
