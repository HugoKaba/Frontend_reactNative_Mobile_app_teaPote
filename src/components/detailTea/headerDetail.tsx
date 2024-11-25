import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const HeaderDetail = ({title, isFavorited, toggleFav}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={toggleFav}>
        <Image
          style={styles.favoriteIcon}
          source={
            isFavorited
              ? require('../../assets/icon/favClicked.png')
              : require('../../assets/icon/etoile.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  favoriteIcon: {
    width: 36,
    height: 36,
  },
});

export default HeaderDetail;
