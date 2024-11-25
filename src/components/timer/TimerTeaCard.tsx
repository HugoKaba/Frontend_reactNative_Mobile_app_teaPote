import React, {StyleSheet, Text, View} from 'react-native';
import colors from '../../styles/colors';
import Timer from './Timer';
import {useContext, useState} from 'react';
import * as Selection from '../../contexts/selection';
const TimerTeaCard = ({
  tea,
  time,
  teaTypes,
  teaId,
}: {
  tea: string;
  time: number;
  teaTypes: Object;
  teaId: number;
}) => {
  const teaType = teaTypes.TeaType.name;
  const background = colors.tea[teaType].background;
  const {teaMinTime} = useContext(Selection.Context);

  return (
    <View
      style={[
        style.card,
        style.shadowProp,
        style.elevation,
        {backgroundColor: background},
      ]}>
      <Text style={style.text}>{tea}</Text>
      <Timer time={time} teaId={teaId} />
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    borderRadius: 8,
    display: 'flex',
    padding: 16,
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  shadowProp: {
    shadowColor: colors.primary,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 5,
    shadowColor: colors.primary,
  },
});
export default TimerTeaCard;
