import React from 'react';
import { View, Image } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Home from '../../assets/BaseMenu/Home.png';
import Search from '../../assets/BaseMenu/Search.png';
import Cart from '../../assets/BaseMenu/Cart.png';
import Discounts from '../../assets/BaseMenu/Discounts.png';
import User from '../../assets/BaseMenu/User.png';

import { Container, MenuItem } from './styles';

const BaseMenu: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Container>
      <MenuItem
        active={route.name === 'Home'}
        onPress={() => navigation.navigate('Home')}
      >
        <Image source={Home} />
      </MenuItem>
      <MenuItem
        active={route.name === 'Map'}
        onPress={() => navigation.navigate('Map')}
      >
        <Image source={Search} />
      </MenuItem>
      <MenuItem
        active={route.name === 'Order'}
        onPress={() => navigation.navigate('Order')}
      >
        <Image source={Cart} />
      </MenuItem>
      <MenuItem
        active={route.name === 'Rewards'}
        onPress={() => navigation.navigate('Rewards')}
      >
        <Image source={Discounts} />
      </MenuItem>
      <MenuItem
        active={route.name === 'Profile'}
        onPress={() => navigation.navigate('Home')}
      >
        <Image source={User} />
      </MenuItem>
    </Container>
  );
};

export default BaseMenu;
