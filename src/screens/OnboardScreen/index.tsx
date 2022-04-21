import React from 'react';
import {Image, ImageBackground, View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import background from '../../assets/imgs/onboarding-background1x.png';

import {
  Container,
  SliderContainer,
  SliderInfo,
  SliderTitle,
  SliderDescription,
  SliderImage,
  NextButtonContainer,
  NextButtonText,
} from './styles';

const slide1 = require('../../assets/imgs/onboarding1.png');
const slide2 = require('../../assets/imgs/onboarding2.png');
const slide3 = require('../../assets/imgs/onboarding2.png');

const slides = [
  {
    key: 1,
    image: slide1,
    title: 'Trade anytime anywhere',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    key: 2,
    image: slide2,
    title: 'Save and invest at the same time',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    key: 3,
    image: slide3,
    title: 'Transact fast and easy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

const OnboardScreen = () => {
  const [showRealApp, setShowRealApp] = React.useState(false);

  const renderItem = ({item}) => (
    <SliderContainer>
      <SliderImage source={item.image} />
      <SliderInfo>
        <SliderTitle>{item.title}</SliderTitle>
        <SliderDescription>{item.description}</SliderDescription>
      </SliderInfo>
    </SliderContainer>
  );

  const onDone = () => {
    setShowRealApp(true);
  };

  const renderNextButton = () => (
    <NextButtonContainer>
      <NextButtonText>Next</NextButtonText>
    </NextButtonContainer>
  );

  return (
    <ImageBackground source={background} resizeMode="cover" style={{flex: 1}}>
      <Container>
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          onDone={onDone}
          renderNextButton={renderNextButton}
          renderDoneButton={renderNextButton}
          bottomButton
        />
      </Container>
    </ImageBackground>
  );
};

export default OnboardScreen;
