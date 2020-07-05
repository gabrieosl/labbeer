import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import api from '../../services/api';

import Header from '../../components/Header';
import BaseMenu from '../../components/BaseMenu';

import AddButton from './AddButton';

import {
  Container,
  MenuTable,
  AddContainer,
  AddDetails,
  TR,
  TD,
  TH,
  H1,
  H2,
  H3,
  H4,
} from './styles';

interface BarItemProps {
  id: number;
  name: string;
  phone: string;
  address: string;
  latitude: string;
  longitute: string;
  cnpj: number;
  logo: string;
}

const MENU = [
  { id: 1, name: 'Budweiser', volume: '550mL', quantity: 0, price: 'R$ 5,90' },
  { id: 2, name: 'Brahma', volume: '390mL', quantity: 0, price: 'R$ 3,80' },
  { id: 5, name: 'Skol', volume: '390mL', quantity: 0, price: 'R$ 3,60' },
  {
    id: 3,
    name: 'Stella Artois',
    volume: '550mL',
    quantity: 0,
    price: 'R$ 6,40',
  },
  { id: 4, name: 'Sukita', volume: '350mL', quantity: 0, price: 'R$ 3,20' },
];

const Menu: React.FC = () => {
  const [bar, setBar] = useState<BarItemProps>({} as BarItemProps);
  const [menu, setMenu] = useState(MENU);

  useEffect(() => {
    async function fetchBar() {
      const response = await api.get(`/bars/${2}`);
      setBar(response.data);
    }

    fetchBar();
  }, []);

  return (
    <>
      <Header />
      <Container
        contentContainerStyle={{ alignItems: 'center', width: '100%' }}
      >
        <Image
          style={{ width: '100%', height: 246 }}
          source={{ uri: bar.logo }}
        />
        <H1>{bar.name}</H1>
        <H2>Cardápio</H2>
        <MenuTable>
          <TR>
            <TH>Item</TH>
            <TH>Quantidade</TH>
            <TH>Preço</TH>
          </TR>
          {menu.map((item, i) => (
            <TR key={item.id}>
              <TD>
                <AddContainer>
                  <AddButton
                    onPress={() => {
                      setMenu(prevMenu => {
                        const newMenu = [...prevMenu];
                        // eslint-disable-next-line operator-assignment
                        newMenu[i].quantity = newMenu[i].quantity + 1;
                        return newMenu;
                      });
                    }}
                  />
                  <AddDetails>
                    <H3>{item.name}</H3>
                    <H4>{item.volume}</H4>
                  </AddDetails>
                </AddContainer>
              </TD>
              <TD>
                <H4>{item.quantity}</H4>
              </TD>
              <TD>
                <H4>{item.price}</H4>
              </TD>
            </TR>
          ))}
        </MenuTable>
      </Container>
      <BaseMenu />
    </>
  );
};

export default Menu;
