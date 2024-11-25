import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import CategoryContainer from './homepage/CategoryContainer';
import * as TeaOwned from '../contexts/tea-owned';
import * as Selection from '../contexts/selection';
import SelectModal from './homepage/SelectModal';
import colors from '../styles/colors';
import TeaLeave from '../assets/icon/TeaLeave';
import CloseIcon from '../assets/icon/CloseIcon';

const TeaComponents = ({navigation}) => {
  const {
    fetchTeaTypes,
    loading,
    teaCategories,
    // searchTeas,
    searchText,
    searchTimeout,
    isTypeModalVisible,
    toggleTypeModal,
    handleTypeSelect,
    selectedType,
    isEmpty,
  } = TeaOwned.useContext();

  const {isModalVisible, toggleModal, toggle} = Selection.useContext();
  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      if (searchText || selectedType) {
        // searchTeas(searchText, selectedType);
      } else {
        fetchTeaTypes();
      }
    }, 500);

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [searchText, selectedType]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={teaCategories}
        renderItem={({item}) => {
          if (!isEmpty(item)) {
            return;
          }
          return <CategoryContainer category={item} navigation={navigation} />;
        }}
      />
      <SelectModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        navigation={navigation}
        toggle={toggle}
      />
      <Modal
        style={styles.modal}
        isVisible={isTypeModalVisible}
        onBackdropPress={toggleTypeModal}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Filtrer par types de thés : </Text>
          <View style={styles.buttonContainer}>
            {teaCategories.map((category: string, index: number) => (
              <TouchableOpacity
                key={index.toString()}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      selectedType === category
                        ? colors.tea[category].lighter
                        : '',
                  },
                ]}
                onPress={() => handleTypeSelect(category)}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                  <TeaLeave color={colors.tea[category].color} />
                  <Text style={[{textAlign: 'center'}, {fontSize: 17}]}>
                    {category}
                  </Text>
                </View>
                {selectedType === category ? (
                  <CloseIcon color={colors.tea[category].color} />
                ) : (
                  ''
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 8,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 8,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    borderColor: colors.primary,
    borderWidth: 1,
    display: 'flex',
    gap: 16,
  },
  buttonContainer: {
    gap: 2,
    width: '100%',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,

    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  error: {
    color: 'red',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  teaItemList: {
    width: '100%',
    display: 'flex',

    padding: 8,
  },
  column: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default TeaComponents;
