import React from 'react';
import { View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Home from '../../assets/BaseMenu/Home.png';
import Search from '../../assets/BaseMenu/Search.png';
import Cart from '../../assets/BaseMenu/Cart.png';
import Discounts from '../../assets/BaseMenu/Discounts.png';
import User from '../../assets/BaseMenu/User.png';

import { Container, MenuItem } from './styles';

const BaseMenu: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <MenuItem onPress={() => navigation.navigate('Home')}>
        <Image source={Home} />
      </MenuItem>
      <MenuItem onPress={() => navigation.navigate('Map')}>
        <Image source={Search} />
      </MenuItem>
      <MenuItem onPress={() => navigation.navigate('Home')}>
        <Image source={Cart} />
      </MenuItem>
      <MenuItem onPress={() => navigation.navigate('Rewards')}>
        <Image source={Discounts} />
      </MenuItem>
      <MenuItem onPress={() => navigation.navigate('Home')}>
        <Image source={User} />
      </MenuItem>
    </Container>
  );
};

export default BaseMenu;
