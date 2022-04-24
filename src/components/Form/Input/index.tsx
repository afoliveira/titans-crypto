import React from 'react';
import {View} from 'react-native';

import {
  Container,
  LabelContainer,
  Label,
  TextInput,
  SwitchContainer,
  SwitchText,
} from './styles';

type InputProps = {
  label: string;
  placeholder: string;
  value: string | number;
  onChangeText: () => void;
  handleSwitchInput?: () => void;
  marginBottom?: number;
  haveSwitch?: boolean;
  switchText?: string;
  keyboardType?: string;
};

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  marginBottom,
  haveSwitch,
  handleSwitchInput,
  switchText,
  keyboardType,
}: InputProps) => {
  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
        {haveSwitch && (
          <SwitchContainer onPress={handleSwitchInput}>
            <SwitchText>{switchText}</SwitchText>
          </SwitchContainer>
        )}
      </LabelContainer>
      <TextInput
        placeholder={placeholder}
        value={value}
        marginBottom={marginBottom}
        onChangeText={onChangeText}
        placeholderTextColor="#777"
        keyboardType={keyboardType}
        maxLength={1}
      />
    </Container>
  );
};

export default Input;
