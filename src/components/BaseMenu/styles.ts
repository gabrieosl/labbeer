import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;

interface MenuItemProps {
  active: boolean;
}
export const MenuItem = styled.TouchableOpacity<MenuItemProps>`
  background: ${props => (props.active ? '#F9E4D0' : '#fff')};
  border-radius: 13px;
  padding: 10px;
`;
