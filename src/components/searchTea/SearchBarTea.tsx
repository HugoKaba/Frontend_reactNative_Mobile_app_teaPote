import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const SearchBar = ({name, setName, type, setType, handleSearch}) => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
          <Image
            source={require('../../assets/icon/zoom.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Rechercher"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#848CB6"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    marginBottom: 12,
    alignContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#fff',
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#848CB6',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    height: 40,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    padding: 0,
  },
  searchIcon: {
    marginLeft: 8,
  },
});

export default SearchBar;
