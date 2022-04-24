import styled from 'styled-components/native';

export const Container = styled.View``;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 54px;
  background-color: #161c22;
  color: #777;
  border-radius: 15px;
  padding: 20px;
  margin-top: 12px;
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}px` : '20px'};
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: #a7afb7;
  font-size: 14px;
  font-family: 'NeueMontreal-Regular';
`;

export const SwitchContainer = styled.TouchableOpacity``;

export const SwitchText = styled.Text`
  color: #5ed5a8;
  font-size: 14px;
  font-family: 'NeueMontreal-Regular';
`;
