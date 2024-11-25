// TeaTypeSelector
import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import styles from '../../screens/addTeaScreen/addTeaStyles';
import colors from '../../styles/colors';
import CheckIcon from '../../assets/icon/CheckIcon';

const TeaTypeSelector = ({
  teaType,
  selectedTeaType,
  setSelectedTeaType,
  onSelectImage,
}) => {
  const handlePress = () => {
    setSelectedTeaType(teaType.type);
    onSelectImage(teaType.image);
  };
  const getImageSource = () => {
    switch (teaType.type) {
      case 'Thé Vert':
        return require('../../assets/image/teaType/theVert.png');
      case 'Thé Noir':
        return require('../../assets/image/teaType/theNoir.png');
      case 'Thé Blanc':
        return require('../../assets/image/teaType/theBlanc.png');
      case 'Thé Sombre':
        return require('../../assets/image/teaType/puErh.png');
      case 'Oolong':
        return require('../../assets/image/teaType/oolong.png');
      case 'Maté':
        return require('../../assets/image/teaType/mate.png');
      case 'Matcha':
        return require('../../assets/image/teaType/matcha.png');
      case 'Rooïbos':
        return require('../../assets/image/teaType/rooibos.png');
      case 'Infusion':
        return require('../../assets/image/teaType/infusion.png');
      default:
        return null;
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.teaItem,
        selectedTeaType === teaType.type && styles.selectedTeaText,
        selectedTeaType === teaType.type && {
          backgroundColor: colors.tea[teaType.type].lighter,
        },
      ]}
      onPress={handlePress}>
      <Image
        source={getImageSource()}
        style={[
          styles.teaImage,
          {borderColor: colors.tea[teaType.type].background},
        ]}
      />
      <Text style={[styles.teaType, {color: colors.tea[teaType.type].color}]}>
        {teaType.type}
      </Text>
      {selectedTeaType === teaType.type ? (
        <CheckIcon
          color={colors.darkPrimary}
          opacity="0.2"
          style={styles.selectedTeaIcon}
        />
      ) : (
        ''
      )}
    </TouchableOpacity>
  );
};

export default TeaTypeSelector;
