import styled, { css } from 'styled-components/native';

interface PProps {
  inverted: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const BannerContainer = styled.View`
  width: 100%;
  height: 200px;
  margin: 20px 0;
  align-items: center;
`;

export const BannerTitle = styled.Text`
  position: absolute;
  width: 90%;
  height: 100%;
  padding-top: 54px;
  padding-left: 28px;
  top: 0;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  /* align-self: baseline; */
  background: rgba(0, 0, 0, 0.65);
`;

export const SectionContainer = styled.SafeAreaView`
  width: 90%;
  margin-bottom: 30px;
`;

export const SalesGroup = styled.ScrollView``;

export const SaleItem = styled.SafeAreaView`
  flex-direction: row;
  margin-top: 15px;
  margin-right: 25px;
`;

export const SaleDetail = styled.SafeAreaView``;

export const PriceContainer = styled.SafeAreaView`
  flex-direction: row;
`;

export const H1 = styled.Text`
  height: 33px;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  color: #000000;
`;
export const H2 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: #000000;
`;

export const P = styled.Text`
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 1px;
  color: #77838f;
  padding: 4px;

  ${(props: PProps) =>
    props.inverted &&
    css`
      color: #f97115;
      background: #f9e4d0;
      font-size: 14px;
    `}
`;

export const BarGroup = styled.ScrollView``;

export const BarItem = styled.SafeAreaView`
  margin-top: 15px;
  margin-right: 25px;
`;

export const BarDetail = styled.SafeAreaView``;
