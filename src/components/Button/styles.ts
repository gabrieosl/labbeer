import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 310px;
  height: 55px;

  background: #f97115;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  line-height: 26px;
  color: #fff;
`;
