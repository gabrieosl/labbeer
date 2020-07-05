import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  /* height: 90px; */
  background: #fff;
`;
export const Content = styled.View`
  width: 100%;
  height: 90px;
  padding: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Notifications = styled.Image`
  justify-content: center;
  align-items: center;
`;
export const NameCoins = styled.View`
  flex: 1;
  margin: 0 20px;
`;
export const Name = styled.Text`
  font-family: 'Poppins-Regular';
  letter-spacing: 1px;
  color: #272140;

  font-size: 18px;
  line-height: 21px;
`;
export const Coins = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CoinsValue = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 10px;
  font-size: 11px;
  line-height: 13px;
  /* identical to box height */

  color: #576e82;
`;
export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-left: 12px;
`;
