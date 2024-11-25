import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
import styles from '../../screens/addTeaScreen/addTeaStyles';

const DayTimeAndBioSelector = ({
  selectedTimeOfDay,
  setSelectedTimeOfDay,
  isOrganic,
  setIsOrganic,
  teaImages,
}) => {
  const [otherTime, setOtherTime] = useState('');

  const handleTimeOfDayPress = timeOfDay => {
    setSelectedTimeOfDay(timeOfDay);
    if (timeOfDay !== 'autre') {
      setOtherTime('');
    }
  };

  return (
    <View style={styles.optionsContainer}>
      <Text style={[styles.subtitle]}>Moment de la journée :</Text>
      <View style={styles.timeOfDayContainer}>
        <TouchableOpacity
          style={[
            styles.timeOfDayButton,
            selectedTimeOfDay === 'matin' && styles.selectedTimeOfDay,
          ]}
          onPress={() => handleTimeOfDayPress('matin')}>
          <Image source={teaImages.matin} style={styles.timeOfDayIcon} />
          <Text style={styles.timeOfDayText}>Matin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.timeOfDayButton,
            selectedTimeOfDay === 'soir' && styles.selectedTimeOfDay,
          ]}
          onPress={() => handleTimeOfDayPress('soir')}>
          <Image source={teaImages.soir} style={styles.timeOfDayIcon} />
          <Text style={styles.timeOfDayText}>Soir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.timeOfDayButton,
            selectedTimeOfDay === 'indifférent' && styles.selectedTimeOfDay,
          ]}
          onPress={() => handleTimeOfDayPress('indifférent')}>
          <Image source={teaImages.importe} style={styles.timeOfDayIcon} />
          <Text style={styles.timeOfDayText}>Indifférent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.timeOfDayButton,
            selectedTimeOfDay === 'autre' && styles.selectedTimeOfDay,
          ]}
          onPress={() => handleTimeOfDayPress('autre')}>
          <Image source={teaImages.autre} style={styles.timeOfDayIcon} />
          <Text style={styles.timeOfDayText}>Autre</Text>
        </TouchableOpacity>
      </View>

      {selectedTimeOfDay === 'autre' && (
        <View style={styles.otherTimeContainer}>
          <Text style={[styles.subtitle]}>Précisez :</Text>
          <View
            style={{paddingHorizontal: 16, paddingRight: 128, width: '100%'}}>
            <TextInput
              style={styles.input}
              value={otherTime}
              onChangeText={setOtherTime}
              placeholder="Autre moment de la journée"
            />
          </View>
        </View>
      )}
      <Text style={[styles.subtitle]}>Bio :</Text>

      <View style={styles.organicContainer}>
        <TouchableOpacity
          style={styles.bioOption}
          onPress={() => setIsOrganic(!isOrganic)}>
          <Image source={teaImages.bio} style={styles.bioIcon} />
          <Text style={styles.bioText}>{isOrganic ? 'Oui' : 'Non'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DayTimeAndBioSelector;
