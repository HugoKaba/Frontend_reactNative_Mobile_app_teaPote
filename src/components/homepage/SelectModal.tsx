import {View, Text, StyleSheet, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {TeaTimer} from '../../models/teaTimer';
import {deleteTea} from '../../services/teaService/TeaService';
import {useEffect, useState} from 'react';
import * as TeaOwned from '../../contexts/tea-owned';
import * as Selection from '../../contexts/selection';
import colors from '../../styles/colors';
import TeaLeave from '../../assets/icon/TeaLeave';

// import AvailabilityIcon from '../../assets/icon/AvailabilityIcon';
import CheckIcon from '../../assets/icon/CheckIcon';
import SearchIcon from '../../assets/icon/SearchIcon';
// import ShareIcon from '../../assets/icon/ShareIcon';
import TrashIcon from '../../assets/icon/TrashIcon';

import ModalOption from './ModalOption';
import IconsDetail from '../detailTea/iconDetail';

const SelectModal = ({isModalVisible, toggleModal, navigation, toggle}) => {
  const [showPopup, setShowPopup] = useState(false);
  const {fetchTeaTypes} = TeaOwned.useContext();
  const {selectedTea, selectedTeas} = Selection.useContext();
  const {ingredientList, setIngredientList} = useState();

  const navigationDetailpage = () => {
    if (selectedTea) {
      toggleModal();
      navigation.navigate('Detail', {selectedTea});
    }
  };

  const selectTeaTimer = () => {
    if (selectedTea) {
      const {name, timeMin} = selectedTea;
      const selectedTeaInfo: TeaTimer = {name, timeMin};

      const teaAlreadySelected = selectedTeas.some(
        tea => tea.name === name && tea.timeMin === timeMin,
      );

      if (teaAlreadySelected) {
        setShowPopup(true);
      } else {
        toggle(selectedTea);
        toggleModal();
      }
    }
  };
  const deleteSelectedTea = async () => {
    if (selectedTea) {
      try {
        await deleteTea(selectedTea.id);
        fetchTeaTypes();
        toggleModal();
      } catch (error) {
        console.error('Erreur lors de la suppression du thé:', error);
      }
    }
  };
  const options = [
    {
      icon: SearchIcon,
      title: 'Détails',
      action: navigationDetailpage,
    },
    {
      icon: CheckIcon,
      title: 'Séléctionner',
      action: selectTeaTimer,
    },
    /* {
      icon: ShareIcon,
      title: 'Partager',
    }, */
    /* {
      icon: AvailabilityIcon,
      title: 'Disponibilité',
    }, */
    {
      icon: TrashIcon,
      title: 'Supprimer',
      color: colors.tea['Thé Noir'].color,
      action: deleteSelectedTea,
    },
  ];

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000); // 3 secondes
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const cleanIngredients = ingredient => {
    const cleanedIngredient = ingredient
      .replace(/\s*\(.*?\)\s*/g, '')
      .replace(/\*/g, '')
      .trim();
    return cleanedIngredient;
  };
  const getIngredientsList = () => {
    const ingredients = selectedTea.HasIngredients.reduce(
      (accumulator, {Ingredient}, index) => {
        const cleanedIngredient = cleanIngredients(Ingredient.name);
        return accumulator + (index === 0 ? '' : ', ') + cleanedIngredient;
      },
      '',
    );

    const ingredientList =
      ingredients.length === 0
        ? 'Thé nature'
        : ingredients.length > 50
        ? ingredients.substring(0, 70) + '...'
        : ingredients;
    return ingredientList;
  };

  const teaColor = selectedTea?.HasTypes?.TeaType?.name || 'Autres';

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onSwipeComplete={toggleModal}
      swipeDirection="down"
      style={styles.modal}>
      <View
        style={[
          styles.modalContent,
          {borderColor: colors.tea[teaColor].color},
        ]}>
        {selectedTea && (
          <View style={styles.contentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{selectedTea.name} </Text>
              <TeaLeave color={colors.tea[teaColor].color} />
            </View>
            <View style={styles.ingredientsContainer}>
              <Text style={{fontSize: 16}}>{getIngredientsList()}</Text>
            </View>
            <View /* style={styles.detailsInfoContainer} */>
              <IconsDetail selectedTea={selectedTea} />
            </View>

            <FlatList
              style={styles.optionList}
              data={options}
              renderItem={({item}) => <ModalOption option={item} />}
              keyExtractor={(item, index) => index.toString()}
            />

            {/* {showPopup && (
              <Text style={styles.error}>Le thé est déjà sélectionné !</Text>
            )} */}
          </View>
        )}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  ingredientsContainer: {},
  contentContainer: {
    width: '100%',
    gap: 8,
  },
  optionList: {
    marginTop: 16,

    flexGrow: 0,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignContent: 'center',
    gap: 8,
  },
  modalContent: {
    backgroundColor: 'white',
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',

    borderStyle: 'solid',
    borderWidth: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  error: {
    color: 'red',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    fontWeight: 'bold',
  },
});

export default SelectModal;
