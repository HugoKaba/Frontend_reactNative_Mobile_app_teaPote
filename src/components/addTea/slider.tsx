import React from 'react';
import {View, Text, TextInput, Button, Modal} from 'react-native';
import Slider from '@react-native-community/slider';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {TimerPicker} from 'react-native-timer-picker';
import {LinearGradient} from 'expo-linear-gradient'; // or `import LinearGradient from "react-native-linear-gradient"`
import {Audio} from 'expo-av'; // for audio feedback (click sound as you scroll)
import * as Haptics from 'expo-haptics'; // for haptic feedback
import styles from '../../screens/addTeaScreen/addTeaStyles';
import colors from '../../styles/colors';

const TemperatureSlider = ({temps, onTemperatureChange}) => (
  <View style={styles.sliderValuesContainer}>
    <Text style={styles.subtitle}>Température d'infusion :</Text>
    <Text style={styles.secondTitle}>
      {temps == 25 ? 'Ambiante' : temps + ' °C'}
    </Text>
    <Slider
      value={temps}
      onValueChange={onTemperatureChange}
      minimumValue={25}
      maximumValue={100}
      step={5}
      minimumTrackTintColor={colors.lightPrimary}
      maximumTrackTintColor="silver"
      thumbTintColor={colors.primary}
      style={[styles.slider, {width: 280}]}
    />
  </View>
);

const TimeSlider = ({timeMin, timeMax, onTimeChange}) => {
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}' ${remainingSeconds}"`;
  };

  return (
    <View style={styles.sliderValuesContainer}>
      <Text style={styles.subtitle}>Temps d'infusion :</Text>

      <Text style={styles.secondTitle}>Minimum : {formatTime(timeMin)}</Text>
      <Text style={styles.secondTitle}>Maximum : {formatTime(timeMax)}</Text>
      {/* <MultiSlider
        values={[timeMin, timeMax]}
        sliderLength={250}
        onValuesChange={onTimeChange}
        min={60}
        max={3600}
        step={15}
        selectedStyle={{
          backgroundColor: '#848CB6',
        }}
        unselectedStyle={{
          backgroundColor: 'silver',
        }}
        trackStyle={{
          height: 5,
        }}
        markerStyle={{
          height: 20,
          width: 20,
          backgroundColor: '#848CB6',
        }}
        containerStyle={styles.slider}
      /> */}
      <TextInput keyboardType="numeric" onChangeText={() => onTimeChange} />
    </View>
  );
};

const MinTimePicker = ({
  timeMin,
  timeMax,
  onMinTimeChange,
  onMaxTimeChange,
}) => {
  return (
    <View style={{marginBottom: 16}}>
      <Text>Minimum : </Text>
      <View
        style={{
          backgroundColor: colors.background,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
          borderWidth: 1,
          paddingVertical: 12,
          marginVertical: 8,
          borderColor: colors.lightPrimary,
        }}>
        <TimerPicker
          padWithNItems={1}
          hideHours
          minuteLabel="min"
          secondLabel="sec"
          Audio={Audio}
          LinearGradient={LinearGradient}
          Haptics={Haptics}
          onDurationChange={onMinTimeChange}
          styles={{
            backgroundColor: colors.background,
            theme: 'light',
            pickerItem: {
              fontSize: 20,
            },
            pickerLabel: {
              fontSize: 18,
              right: -20,
            },
            pickerLabelContainer: {
              width: 50,
            },
            pickerItemContainer: {
              width: 140,
            },
          }}
        />
      </View>
      <Text>Maximum (facultatif): </Text>
      <View
        style={{
          backgroundColor: colors.background,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
          borderWidth: 1,
          paddingVertical: 12,
          marginVertical: 8,
          borderColor: colors.lightPrimary,
        }}>
        <TimerPicker
          padWithNItems={1}
          hideHours
          minuteLabel="min"
          secondLabel="sec"
          Audio={Audio}
          LinearGradient={LinearGradient}
          Haptics={Haptics}
          onDurationChange={onMaxTimeChange}
          styles={{
            backgroundColor: colors.background,
            theme: 'light',
            pickerItem: {
              fontSize: 20,
            },
            pickerLabel: {
              fontSize: 18,
              right: -20,
            },
            pickerLabelContainer: {
              width: 50,
            },
            pickerItemContainer: {
              width: 140,
            },
          }}
        />
      </View>
    </View>
  );
};

export {TemperatureSlider, TimeSlider, MinTimePicker};
