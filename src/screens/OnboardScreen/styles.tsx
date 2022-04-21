import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SliderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SliderInfo = styled.View`
  align-items: center;
  margin-top: 37px;
`;

export const SliderTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const SliderImage = styled.Image`
  max-width: 100%;
`;

export const SliderDescription = styled.Text`
  color: #777;
  font-size: 18px;
  text-align: center;
`;

export const NextButtonContainer = styled.View`
  background-color: #5ed5a8;
  border-radius: 10px;
  width: 180px;
  height: 54;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const NextButtonText = styled.Text`
  color: #171d22;
  font-size: 18px;
`;
