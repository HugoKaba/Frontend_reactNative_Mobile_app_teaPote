import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import TeaItem from './TeaItem';
import * as TeaOwned from '../../contexts/tea-owned';
import colors from '../../styles/colors';

const CategoryContainer = (teaCategory, {navigation}) => {
  const {categories} = TeaOwned.useContext();

  const teaType = teaCategory['category'];

  const background = colors.tea[teaType].lighter;
  return (
    <View style={[styles.container, {backgroundColor: background}]}>
      <Text style={styles.title}>{teaType}</Text>
      <FlatList
        style={[styles.teaItemList]}
        numColumns={2}
        columnWrapperStyle={styles.column}
        data={categories[teaCategory['category']]}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TeaItem
            key={item.id.toString()}
            item={item}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginBottom: 16,
  },
  teaItemList: {
    width: '100%',
    display: 'flex',

    padding: 8,
  },
  column: {
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 16,
  },
});

export default CategoryContainer;
