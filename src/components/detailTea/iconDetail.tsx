import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const IconsDetail = ({selectedTea}) => {
  const details = [
    {label: `${selectedTea.tempMin ?? 'N/A'}°C`, iconIndex: 0},
    selectedTea.isBio ? {label: 'Bio', iconIndex: 1} : null,
    {
      label: `${selectedTea.timeMin ?? 'N/A'}-${selectedTea.timeMax ?? 'N/A'}'`,
      iconIndex: 2,
    },
    {label: `${selectedTea.theine ?? 'N/A'}`, iconIndex: 3},
    selectedTea.isInTeabag
      ? {label: 'Sachet', iconIndex: 4}
      : {label: 'En vrac', iconIndex: 4},
    {label: `${selectedTea.country?.name ?? 'aucun'}`, iconIndex: 5},
  ].filter(detail => detail !== null);

  const allImages = [
    require('../../assets/icon/tasse-a-the.png'),
    require('../../assets/icon/la-graine.png'),
    require('../../assets/icon/sablier.png'),
    require('../../assets/icon/feuilles-de-the.png'),
    require('../../assets/icon/sachet-de-the.png'),
    require('../../assets/icon/la-terre.png'),
  ];

  return (
    <View style={styles.iconsContainer}>
      {details.map((detail, index) => (
        <View style={styles.iconItem} key={index}>
          {detail.iconIndex !== undefined ? (
            <Image style={styles.icon} source={allImages[detail.iconIndex]} />
          ) : null}
          <Text style={styles.iconLabel}>{detail.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconItem: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D8EED7',
    padding: 10,
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 5,
  },
  iconLabel: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default IconsDetail;
