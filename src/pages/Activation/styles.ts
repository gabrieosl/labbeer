import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0 30px;

  justify-content: center;
  align-items: center;
`;

export const H1 = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  color: #242424;
`;
export const H2 = styled.Text`
  margin-top: 10px;
  margin-bottom: 32px;
  font-family: 'Poppins-ExtraLight';
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #9097a5;
`;

export const CodeValue = styled.Text`
  font-size: 35px;
  text-align: center;
  letter-spacing: 12px;
`;

interface ActivationButtonProps {
  active: boolean;
}
export const ActivationButton = styled.TouchableOpacity<ActivationButtonProps>`
  width: 100%;
  height: 50px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  background: #f97115;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  margin: 32px 0;

  justify-content: center;
  align-items: center;
`;

export const ActivationButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #ffffff;
`;
