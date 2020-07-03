import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: #dfe2e7;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-color: #eeeeee;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #9097a5;
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins-Medium';
`;
