import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const MenuTable = styled.View`
  width: 100%;
  margin-top: 25px;
`;

export const TR = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 8px 4px;
  margin: 0 30px;
  justify-content: space-between;
`;

export const AddContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100px;
`;

export const AddDetails = styled.View`
  margin-left: 10px;
`;

export const TH = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: right;

  color: #2c303e;
`;

export const TD = styled.View``;

export const H1 = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: -0.24px;
  color: #1a1824;
`;

export const H2 = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #77838f;
`;

export const H3 = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 15px;
`;

export const H4 = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #2c303e;
`;
