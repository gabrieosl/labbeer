import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  background: #f97115;
`;
export const Content = styled.View`
  width: 100%;
  height: 90px;
  padding: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Aside = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const NameCoins = styled.View``;
export const Name = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1px;
  color: #ffffff;
`;
export const Coins = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const CoinsValue = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 10px;
  line-height: 15px;
  text-align: right;
  letter-spacing: 1px;
  color: #e3e3e3;
  margin-left: 6px;
`;
export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-left: 12px;
`;
