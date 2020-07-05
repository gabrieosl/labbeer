import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
`;

export const Title = styled.View`
  flex-direction: row;
`;

export const H1 = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  line-height: 20px;

  color: #2c303e;
`;

export const H2 = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 10px;
  line-height: 12px;
  margin: 15px 0;
`;

export const Table = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
  background: #ffffff;

  padding: 24px;
`;
export const TableText = styled.Text``;

export const HeadItems = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 30px;
`;
export const HeadText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
`;
export const CartItems = styled.View`
  margin: 0 30px;
`;
export const CartItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
`;
export const CartItemText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  /* identical to box height */

  text-align: right;

  color: #2c303e;
`;
export const CartItemSubtext = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  /* identical to box height */

  text-align: right;

  color: #2c303e;
`;

export const OrderButton = styled.TouchableOpacity`
  background: #f97115;
  border-radius: 7px;
  height: 50px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;

  justify-content: center;
  align-items: center;
`;
export const OrderButtonText = styled.Text`
  font-family: 'Poppins-Regular';
  font-weight: 900;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;

  color: #fefffb;
`;
export const CancelOrderText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.24px;

  color: #1a1824;
`;
