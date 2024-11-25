import React from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const TeaModal = ({
  modalVisible,
  selectedTea,
  handleAddTea,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Ajouter un Thé</Text>
          <Text style={styles.modalText}>
            Voulez-vous ajouter ce thé à votre liste ?
          </Text>
          {selectedTea && (
            <>
              <Text style={styles.modalText}>Nom: {selectedTea.name}</Text>
              <Text style={styles.modalText}>
                Type: {selectedTea.HasTypes?.TeaType?.name || 'Type not found'}
              </Text>
            </>
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonAdd]}
              onPress={handleAddTea}>
              <Text style={styles.buttonText}>Ajouter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
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
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonAdd: {
    backgroundColor: '#28A745',
  },
  buttonCancel: {
    backgroundColor: '#DC3545',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TeaModal;
