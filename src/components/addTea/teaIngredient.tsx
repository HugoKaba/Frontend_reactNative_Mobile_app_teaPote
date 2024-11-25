import React, {useEffect, useState} from 'react';
import {View, TextInput, FlatList, TouchableOpacity, Text} from 'react-native';
import {getIngredient} from '../../services/teaService/TeaService';
import styles from '../../screens/addTeaScreen/addTeaStyles';
import CloseIcon from '../../assets/icon/CloseIcon';

const TeaIngredient = ({selectedIngredients, setSelectedIngredients}) => {
  const [ingredients, setIngredients] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isIngredientListVisible, setIsIngredientListVisible] = useState(false);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const data = await getIngredient();
        setIngredients(data);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    };

    fetchIngredients();
  }, []);

  const filteredIngredients = ingredients.filter(ingredient =>
    ingredient.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleAddCustomIngredient = () => {
    if (searchText.trim() !== '') {
      setSelectedIngredients([
        ...selectedIngredients,
        {name: searchText.trim()},
      ]);
      setSearchText('');
      setIsIngredientListVisible(false);
    }
  };

  const handleSelectIngredient = ingredient => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
    setSearchText('');
    setIsIngredientListVisible(false);
  };

  const handleRemoveIngredient = ingredientToRemove => {
    setSelectedIngredients(
      selectedIngredients.filter(
        ingredient => ingredient !== ingredientToRemove,
      ),
    );
  };

  return (
    <View style={{width: '100%'}}>
      <Text style={styles.subtitle}>Ajouter des ingrédents : </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputIngredient}
          placeholder="Rechercher un ingrédient"
          value={searchText}
          onFocus={() => setIsIngredientListVisible(true)}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddCustomIngredient}>
          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>

      {isIngredientListVisible && (
        <View
          style={[
            styles.ingredientList,
            {
              maxHeight:
                filteredIngredients.length > 4
                  ? 200
                  : filteredIngredients.length * 50,
            },
          ]}>
          <FlatList
            nestedScrollEnabled={true}
            data={filteredIngredients.slice(0, 4)}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleSelectIngredient(item)}>
                <Text style={styles.ingredientItem}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}

      {selectedIngredients.length > 0 && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {selectedIngredients.map((ingredient, index) => (
            <View key={index} style={styles.selectedIngredientContainer}>
              <TouchableOpacity
                onPress={() => handleRemoveIngredient(ingredient)}>
                <Text style={styles.removeButtonText}>✖</Text>
              </TouchableOpacity>
              <Text style={styles.selectedIngredientText}>
                {ingredient.name}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default TeaIngredient;
