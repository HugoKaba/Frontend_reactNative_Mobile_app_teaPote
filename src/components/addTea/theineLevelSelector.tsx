import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const TheineLevelSelector = ({selectedLevel, setSelectedLevel}) => {
  const levels = [
    {label: '?', value: null},
    {label: 'X', value: 0},
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
  ];

  const handlePress = value => {
    setSelectedLevel(value);
  };

  return (
    <View style={styles.container}>
      {levels.map((level, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.circle,
            selectedLevel !== null &&
              selectedLevel > 0 &&
              level.value <= selectedLevel &&
              level.value > 0 &&
              styles.selectedCircle,
            selectedLevel === level.value &&
              level.value === null &&
              styles.selectedCircle,
          ]}
          onPress={() => handlePress(level.value)}>
          <Text style={styles.label}>{level.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 200,
    backgroundColor: colors.lightPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedCircle: {
    backgroundColor: colors.darkPrimary,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TheineLevelSelector;
