import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BarListScroll = styled.ScrollView`
  flex: 1;
  background: #f00;
`;

export const Expand = styled.TouchableOpacity`
  width: 100%;
  height: 28px;
  background: #fff;

  align-items: center;
  justify-content: center;
`;

export const ExpandButton = styled.TouchableOpacity`
  width: 40px;
  height: 3px;
  border-radius: 2px;

  background: #d8d8d8;
`;

export const BarList = styled.ScrollView`
  padding: 0 15px;
`;
export const BarItem = styled.View`
  margin: 10px 0;
  padding-bottom: 20px;
  border-bottom-color: #e7e7e7;
  border-bottom-width: 1px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BarDetails = styled.View`
  flex: 1;
`;
export const BarName = styled.Text`
  font-family: 'Poppins-ExtraLight';
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.8px;
  color: #1e2022;
`;
export const BarLocation = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const BarAddress = styled.Text`
  font-family: 'Poppins-ExtraLight';
  font-size: 12px;
  line-height: 18px;
  margin-left: 8px;
  /* identical to box height */

  letter-spacing: 0.8px;

  color: #6c6c6c;
`;
export const BarLinkButton = styled.TouchableOpacity`
  width: 150px;
  height: 30px;
  border-color: #f97115;
  border-width: 1px;
  border-radius: 19px;
  padding: 0 20px;
  margin-left: 20px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const BarLinkButtonText = styled.Text`
  flex: 1;
  font-family: 'Poppins-Medium';
  font-size: 12px;
  line-height: 18px;

  text-align: center;
  letter-spacing: 1px;

  color: #f97115;
`;
