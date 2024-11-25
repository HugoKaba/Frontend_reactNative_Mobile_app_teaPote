import {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import * as TeaOwned from '../../contexts/tea-owned';
import SearchIcon from '../../assets/icon/SearchIcon';
import SliderIcon from '../../assets/icon/FilterIcon';
import HeartIcon from '../../assets/icon/HeartIcon';

const HomePageHeader = () => {
  const {searchText, setSearchText, toggleTypeModal} = TeaOwned.useContext();

  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [showText, setShowText] = useState(true);
  const slideAnim = useRef(new Animated.Value(-300)).current; // Position de départ hors de l'écran à gauche

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
    if (!searchBarVisible) {
      slideIn();
    } else {
      slideOut();
    }
  };

  const slideIn = () => {
    setShowText(false); // Masquer le texte lorsque le slideIn commence
    Animated.timing(slideAnim, {
      toValue: 70, // Position de fin
      duration: 500, // Durée de l'animation en ms
      useNativeDriver: true,
    }).start();
  };
  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: -300,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setShowText(true)); // Afficher le texte lorsque le slideOut termine
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.searchContainer}> */}
      <TouchableOpacity style={styles.iconContainer} onPress={toggleSearchBar}>
        <SearchIcon />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.animatedSearchBar,
          {
            transform: [{translateX: slideAnim}], // Appliquer l'animation de translation
          },
        ]}>
        <TextInput
          style={styles.searchBar}
          placeholder="Rechercher un thé"
          value={searchText}
          onChangeText={setSearchText}
        />
      </Animated.View>

      {/* </View> */}
      {showText && <Text style={styles.title}>Mes Thés</Text>}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.Icons} onPress={toggleTypeModal}>
          <SliderIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icons}>
          <HeartIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    gap: 8,
  },
  Icons: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  animatedSearchBar: {
    position: 'absolute',
    zIndex: -1,
    width: 230,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',

    flexDirection: 'row',
    width: '100%',
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchBar: {
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  filterButton: {},
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default HomePageHeader;
