import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import {getCountry} from '../../services/teaService/TeaService';
import styles from '../../screens/addTeaScreen/addTeaStyles';

const TeaCountry = ({onSelectCountry}) => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isCountryListVisible, setIsCountryListVisible] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountry();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={{width: '100%'}}>
      <Text style={styles.subtitle}>Provenance : </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputIngredient}
          placeholder="Rechercher un pays"
          value={searchText}
          onFocus={() => setIsCountryListVisible(true)}
          onChangeText={setSearchText}
        />
      </View>
      {isCountryListVisible && (
        <View
          style={[
            styles.countryList,
            {
              maxHeight:
                filteredCountries.length > 4
                  ? 200
                  : filteredCountries.length * 50,
            },
          ]}>
          <FlatList
            nestedScrollEnabled={true}
            data={filteredCountries.slice(0, 4)}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  onSelectCountry(item);
                  setSearchText(item.name);
                  setIsCountryListVisible(false);
                }}>
                <Text style={styles.countryItem}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default TeaCountry;
