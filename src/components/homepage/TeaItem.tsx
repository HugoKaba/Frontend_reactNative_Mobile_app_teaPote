import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import TeaLeave from '../../assets/icon/TeaLeave';

import * as Selection from '../../contexts/selection';

const TeaItem = item => {
  const {toggleModal} = Selection.useContext();

  const teaType = item.item.HasTypes.TeaType.name;
  const background = colors.tea[teaType].background;
  const color = colors.tea[teaType].color;

  const cleanName = name => {
    const cleanedName = name
      .replace(/\s*\(.*?\)\s*/g, '')
      .replace(/\*/g, '')
      .trim();

    // Vérifier si le nom contient "arôme"
    if (cleanedName.toLowerCase().includes('arôme')) {
      return null; // Retourner null pour filtrer plus tard
    }
    return cleanedName;
  };

  const name = item.item.name;

  const ingredients = item?.item?.HasIngredients || [];
  const [first, second] = ingredients.map(({Ingredient}) =>
    cleanName(Ingredient.name),
  );

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, {backgroundColor: background}]}
        onPress={() => toggleModal(item)}>
        <TeaLeave color={color} />
        <Text style={styles.title}>{name}</Text>
        <Text style={[styles.subtitle, {color: color}]}>
          {first} {second}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
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
  container: {
    height: 170,
    width: 170,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: 'bold',
  },
});

export default TeaItem;
