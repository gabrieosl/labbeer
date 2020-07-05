import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-around;
`;

interface ButtonProps {
  selected: boolean;
}

export const RatingTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  letter-spacing: -0.24px;
  margin: 20px 0;
  color: #1a1824;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${props => (props.selected ? '#f97115' : '#EAEAEB')};
  padding: 10px 20px;
  border-radius: 7px;
`;
interface ButtonProps {
  selected: boolean;
}
export const ButtonText = styled.Text<ButtonProps>`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  line-height: 18px;
  margin-right: 5px;

  color: ${props => (props.selected ? '#EAEAEB' : '#000')};
`;

export const RatingValueInput = styled.TextInput`
  margin: 30px 0;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-color: #1a1824;
  color: #000;
`;
export const ButtonSubmit = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  background: #f97115;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;
export const ButtonSubmitText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  letter-spacing: -0.24px;

  color: #ffffff;
`;
