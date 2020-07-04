import React from 'react';
import { View, Image } from 'react-native';

import Home from '../../assets/BaseMenu/Home.png';
import Search from '../../assets/BaseMenu/Search.png';
import Cart from '../../assets/BaseMenu/Cart.png';
import Discounts from '../../assets/BaseMenu/Discounts.png';
import User from '../../assets/BaseMenu/User.png';

import { Container, MenuItem } from './styles';

const BaseMenu: React.FC = () => {
  return (
    <Container>
      <MenuItem>
        <Image source={Home} />
      </MenuItem>
      <MenuItem>
        <Image source={Search} />
      </MenuItem>
      <MenuItem>
        <Image source={Cart} />
      </MenuItem>
      <MenuItem>
        <Image source={Discounts} />
      </MenuItem>
      <MenuItem>
        <Image source={User} />
      </MenuItem>
    </Container>
  );
};

export default BaseMenu;
