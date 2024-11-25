import React, {useEffect, useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const TimerFrame = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <View>
      <Text>{formatTime(seconds)}</Text>
      <View style={styles.buttons}>
        <Button onPress={toggle} title={isActive ? 'Pause' : 'Start'} />
        <Button onPress={reset} title="Reset" />
      </View>
    </View>
  );
};

const formatTime = seconds => {
  const getMinutes = `0${Math.floor(seconds / 60)}`.slice(-2);
  const getSeconds = `0${seconds % 60}`.slice(-2);
  return `${getMinutes}:${getSeconds}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  time: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
});

export default TimerFrame;
