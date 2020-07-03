import styled from 'styled-components/native';
import { Form as Unform } from '@unform/mobile';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 49px;
`;

export const MoreOptions = styled.Text`
  margin-top: 75px;
  font-family: 'Poppins-ExtraLight';
  font-size: 16px;
  line-height: 26px;
  text-align: center;

  color: #1d293f;
`;

export const Form = styled(Unform)`
  margin-top: 50px;
`;

export const SignIn = styled.View`
  flex-direction: row;

  margin-top: 20px;
`;

export const TextSignIn = styled.Text`
  font-family: 'Poppins-ExtraLight';
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #f97115;
`;
export const TextNew = styled.Text`
  margin-right: 4px;
  font-family: 'Poppins-ExtraLight';
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #1d293f;
`;
