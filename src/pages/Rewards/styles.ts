import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const H1 = styled.Text`
  height: 33px;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  color: #000000;
`;

export const P = styled.Text`
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 1px;
  color: #77838f;
`;

export const Summary = styled.SafeAreaView`
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const RewardsContainer = styled.SafeAreaView`
  margin: 0 34px;
  align-self: baseline;
  /* margin: 10px 34px 0; */
  flex-direction: column;
  width: 100%;
`;

export const RewardItem = styled.View`
  margin-top: 30px;
  width: 80%;
  flex-wrap: wrap;
  flex-direction: row;
  /* border-color: #77838f; */
  padding-bottom: 8px;
  /* border-bottom-width: 1px; */
`;

export const RewardIcon = styled.Image`
  /* width: 100;
  height: 100; */
  margin-right: 5px;
`;

export const RewardDetails = styled.View`
  flex-grow: 1;
  flex-wrap: wrap;
`;
