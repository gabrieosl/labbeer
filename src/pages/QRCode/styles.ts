import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 90px;
  right: 50px;
`;

export const H1 = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  margin-top: 5px;
  text-align: center;
  letter-spacing: -0.24px;

  color: #1a1824;
`;

export const P = styled.Text`
  margin: 0 58px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  text-align: center;
  letter-spacing: -0.24px;

  color: #1a1824;
`;
