import {useState} from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';

const TimerModal = ({modalVisible}) => {
  return (
    <View style={style.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text>LE THÉ EST CUIT</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default TimerModal;
