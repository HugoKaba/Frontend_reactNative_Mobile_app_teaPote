import React from 'react';
import LottieView from 'lottie-react-native';

const LottieAnimation = ({source}) => {
  return (
    <LottieView
      source={source}
      autoPlay
      loop
      style={{width: 200, height: 200}}
    />
  );
};

export default LottieAnimation;
