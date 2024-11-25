import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import style from '../../screens/TimerScreen/TimerScreenStyle';
import Timer from './Timer';

import * as Selection from '../../contexts/selection';

const TeaNextTimer = () => {
  const {teaMinTime, minTimer} = useContext(Selection.Context);

  if (!teaMinTime) return null;
  return (
    <View style={style.toCome}>
      <Text style={style.toComeText}> À venir : </Text>
      <View style={style.chrono}>
        <Text style={style.teaName}>{teaMinTime.name}</Text>
        <Timer time={minTimer} ringTone />
      </View>
    </View>
  );
};

export default TeaNextTimer;
