import * as React from 'react';
import {createContext, useEffect, useState} from 'react';
import {Audio} from 'expo-av';
import {TeaTimer} from '../models/teaTimer';
import {Tea} from '../models/tea';

export const Context = createContext([]);
export const useContext = () => {
  const context = React.useContext(Context);
  if (!context) throw new Error('Contexte de séléction cassé');
  return context;
};

export const Provider = props => {
  const [selection, setSelection] = useState([]);
  const [teaMinTime, setTeaMinTime] = useState(selection[0]);
  const [top3minTeas, setTop3minTeas] = useState([]);
  const [minTimer, setMinTimer] = useState(teaMinTime?.timeMin || 0);
  const [sound, setSound] = useState();
  const [selectedTeas, setSelectedTeas] = useState<TeaTimer[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTea, setSelectedTea] = useState<Tea | null>(null);

  useEffect(() => {}, [selectedTea]);
  async function playSound() {
    const {sound} = await Audio.Sound.createAsync(
      require('../assets/sound/duck_quacking.mp3'),
    );
    setSound(sound);

    await sound.playAsync();
  }
  const clearSelection = () => {
    setSelection([]);
  };

  const saveSelection = callback => {
    setSelection(selection =>
      callback(selection).sort((a, b) => a.timeMin - b.timeMin),
    );
  };

  /* Selection sorted by ascending order of time */
  const sortSelection = selection;

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  /* Smallest time in Selection */
  useEffect(() => {
    const runningSelection = selection.filter(({isInfused}) => !isInfused);
    setTeaMinTime(runningSelection[0]);

    /* Display latest tea when all infused */
    if (runningSelection.length <= 0) {
      setTeaMinTime(selection[selection.length - 1] || {});
    }
    /* 3 smallest times in Selection */
    setTop3minTeas(runningSelection.slice(0, 3));
  }, [selection]);

  const addProprety = (id, propterty) => {
    const update = selection.map(tea => {
      if (tea.id != id) return tea;
      return {...tea, ...propterty};
    });
    setSelection(update);
  };

  const setInfused = id => {
    addProprety(id, {isInfused: true});
    if (id) {
      playSound();
    }
  };
  const setSwipped = id => addProprety(id, {isSwipped: true});

  const toggle = (item: object) => {
    const result = selection.some(({id}) => id === item.id);
    if (!result) return saveSelection(selection => [...selection, item]);
    saveSelection(selection => selection.filter(({id}) => id !== item.id));
  };

  const toggleModal = (tea?: Tea) => {
    if (tea) {
      setSelectedTea(tea.item);
    } else {
      setSelectedTea(null);
    }

    setModalVisible(isModalVisible => !isModalVisible);
  };

  return (
    <Context.Provider
      value={{
        selection,
        toggle,
        clearSelection,
        teaMinTime,
        top3minTeas,
        sortSelection,
        setSwipped,
        setInfused,
        minTimer,
        setMinTimer,
        selectedTeas,
        toggleModal,
        isModalVisible,
        selectedTea,
      }}
      {...props}
    />
  );
};
