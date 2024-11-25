import {Text, View} from 'react-native';
import React, {useEffect, useState, useRef, useContext} from 'react';

import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import colors from '../../styles/colors';
import style from '../../screens/TimerScreen/TimerScreenStyle';

const TimerCircleCountdown = ({running, teaType, timeMin, index, reset}) => {
  const [key, setKey] = useState(0);
  const size = [220, 180, 140];

  useEffect(() => {
    setKey(key => key + 1);
  }, [reset]);

  const teaColor = colors.tea[teaType].color;

  return (
    <View style={!!index ? style.countdownCircle : undefined}>
      <CountdownCircleTimer
        isPlaying={running}
        duration={timeMin}
        colors={teaColor}
        size={size[index]}
        trailColor="#FFFFFF"
        key={key}
      />
    </View>
  );
};

export default TimerCircleCountdown;
