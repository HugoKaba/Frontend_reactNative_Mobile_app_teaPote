import React from 'react';
import {FlatList, TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import TeaLeave from '../../assets/icon/TeaLeave';
import colors from '../../styles/colors';

const TeaList = ({data, handleItemPress, isSearching}) => {
  const renderItem = ({item}) => {
    const teaType = item.HasTypes?.TeaType?.name || 'Matcha';
    const color = colors.tea[teaType].color;

    return (
      <TouchableOpacity
        onPress={() => handleItemPress(item)}
        style={styles.item}>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>{item.name}</Text>
          <TeaLeave color={color} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Résultats</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  result: {
    fontSize: 16,
    paddingLeft: 24,
    paddingBottom: 15,
    color: '#000',
  },
  item: {
    height: 73,
    width: 344,

    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#848CB6',
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    width: 290,
    color: '#000',
    fontSize: 16,
  },
  itemType: {
    fontSize: 16,
    color: 'gray',
  },
  resultsList: {
    marginTop: 20,
  },
  listContent: {
    alignItems: 'center',
  },
});

export default TeaList;
