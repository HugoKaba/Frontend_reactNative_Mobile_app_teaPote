import {View, Pressable, Text, FlatList, Button} from 'react-native';
import React, {useState} from 'react';
// import LottieView from 'lottie-react-native';

import TimerTeaCard from '../../components/timer/TimerTeaCard';
import TeaNextTimer from '../../components/timer/TeaNextTimer';
import * as TimersContext from '../../contexts/timers';
import * as Selection from '../../contexts/selection';

import style from './TimerScreenStyle';
import TimerCircleCountdown from '../../components/timer/TimerCircleCountdown';
import TimerModal from '../../components/timer/TimerModal';

const TimerScreen = () => {
  const [running, setRunning] = useState(TimersContext.defaultRunning);
  const [reset, setReset] = useState(TimersContext.defaultReset);

  const {clearSelection, top3minTeas, sortSelection} = Selection.useContext();
  const [modalVisible, setModalVisible] = useState(false);
  const toggle = () => {
    setRunning(running => !running);
  };

  const resetList = () => {
    clearSelection();
    resetTimers();
  };

  const resetTimers = () => {
    setRunning(TimersContext.defaultRunning);
    setReset(reset => reset + 1);
  };

  if (sortSelection.length == 0) {
    return (
      <View style={style.timerView}>
        <TimersContext.Provider value={{reset, running}}>
          <View style={style.upView}>
            <Text style={style.selectTeas}>
              Séléctionnez un ou plusieurs thé(s) dans votre liste
            </Text>
          </View>
        </TimersContext.Provider>
      </View>
    );
  }

  return (
    <View style={style.timerView}>
      <TimersContext.Provider value={{reset, running}}>
        <View style={style.upView}>
          <TimerModal modalVisible={modalVisible} />
          <TeaNextTimer />

          <View>
            <View style={style.buttonsView}>
              <Pressable
                style={[style.button, style.buttonPlay]}
                onPress={toggle}>
                <Text>{running ? 'Pause' : 'Lancer le minuteur'}</Text>
              </Pressable>
              <Pressable
                style={[style.button, style.buttonReset]}
                onPress={resetTimers}>
                <Text>Réinitialiser</Text>
              </Pressable>

              {/* <Pressable style={[style.button]} onPress={displayModal}>
                <Text>Modal</Text>
              </Pressable> */}
            </View>
            <View style={style.countdowns}>
              {top3minTeas.map(({id, HasTypes, timeMin}, index) => (
                <TimerCircleCountdown
                  key={id}
                  running={running}
                  teaType={HasTypes.TeaType.name}
                  timeMin={timeMin}
                  index={index}
                  reset={reset}
                />
              ))}
            </View>
          </View>
          {/* <View style={style.animation}>
            <LottieView
              style={{flex: 1}}
              source={require('../../assets/TeaLeavesAnimation.json')}
              autoPlay
              loop
            />
          </View> */}
        </View>
        <View>
          <Button onPress={resetList} title="Vider la liste" />
        </View>
        <FlatList
          nestedScrollEnabled={true}
          data={sortSelection}
          renderItem={({item, index}) => {
            return (
              <TimerTeaCard
                tea={item.name}
                teaId={item.id}
                time={item.timeMin}
                teaTypes={item.HasTypes}
                key={`${item.id}-${index}`}
              />
            );
          }}
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      </TimersContext.Provider>
    </View>
  );
};

export default TimerScreen;
