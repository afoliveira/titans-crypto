import React from 'react';
import {View} from 'react-native';

import {Container, Title} from './styles';

type SubmitProps = {
  title: string;
  handleSubmit: () => void;
};

const Submit = ({title, handleSubmit}: SubmitProps) => {
  return (
    <Container onPress={handleSubmit}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Submit;
