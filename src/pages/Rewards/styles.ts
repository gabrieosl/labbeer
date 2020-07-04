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

export const Stamps = styled.SafeAreaView`
  align-self: baseline;
  /* margin: 10px 34px 0; */
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
export const Stamp = styled.View`
  margin-top: 30px;
  width: 100;
  height: 100;
  border-radius: 1000;
  background: blue;
  position: relative;
`;

export const StampLevel = styled.Text`
  position: absolute;
  background-color: yellow;
  width: auto;
  height: 16px;
  padding: 8px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  border-radius: 12px;
  border: 4px solid white;
  text-align: right;
  font-size: 13px;
  font-weight: bold;
  color: white;
`;
