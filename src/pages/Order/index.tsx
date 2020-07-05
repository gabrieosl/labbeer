import React from 'react';
import { Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backArrow from '../../assets/back_arrow.png';
import tableArrow from '../../assets/table_arrow.png';

import Header from '../../components/Header';
import BaseMenu from '../../components/BaseMenu';

import {
  Container,
  Title,
  H1,
  H2,
  Table,
  TableText,
  HeadItems,
  HeadText,
  CartItems,
  CartItem,
  CartItemText,
  CartItemSubtext,
  OrderButton,
  OrderButtonText,
  CancelOrderText,
} from './styles';

const Order: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <ScrollView style={{ flex: 1 }}>
        <Container>
          <Title>
            <Image source={backArrow} style={{ marginRight: 15 }} />
            <H1>Seu pedido</H1>
          </Title>
          <H2>Local</H2>
          <Table>
            <TableText>Mesa 6</TableText>
            <Image source={tableArrow} />
          </Table>
          <H2>Detalhes dos pedidos</H2>
          <HeadItems>
            <HeadText>Item</HeadText>
            <HeadText>Quantidade</HeadText>
            <HeadText>Preço</HeadText>
          </HeadItems>
          <CartItems>
            <CartItem>
              <CartItemText>Budweiser</CartItemText>
              <CartItemSubtext>10</CartItemSubtext>
              <CartItemSubtext>R$ 8,90</CartItemSubtext>
            </CartItem>
          </CartItems>
          <Table>
            <CartItemSubtext>Total</CartItemSubtext>
            <TableText>R$ 89,00</TableText>
          </Table>
          <OrderButton onPress={() => navigation.navigate('Splash')}>
            <OrderButtonText>Pedir agora</OrderButtonText>
          </OrderButton>
          <CancelOrderText>Cancelar pedido</CancelOrderText>
        </Container>
      </ScrollView>
      <BaseMenu />
    </>
  );
};

export default Order;
