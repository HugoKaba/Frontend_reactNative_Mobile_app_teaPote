import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ImageDetail from '../../components/detailTea/imageDetail';
import HeaderDetail from '../../components/detailTea/headerDetail';
import IconsDetail from '../../components/detailTea/iconDetail';
import IngredientsDetail from '../../components/detailTea/ingredientDetail';
import NotesDetail from '../../components/detailTea/noteDetail';
import {isFavorite} from '../../services/teaService/TeaService';

const getImageSource = urlImage => {
  switch (urlImage) {
    case '../../assets/image/teaType/theVert.png':
      return require('../../assets/image/teaType/theVert.png');
    case '../../assets/image/teaType/theNoir.png':
      return require('../../assets/image/teaType/theNoir.png');
    case '../../assets/image/teaType/theBlanc.png':
      return require('../../assets/image/teaType/theBlanc.png');
    case '../../assets/image/teaType/puErh.png':
      return require('../../assets/image/teaType/puErh.png');
    case '../../assets/image/teaType/oolong.png':
      return require('../../assets/image/teaType/oolong.png');
    case '../../assets/image/teaType/mate.png':
      return require('../../assets/image/teaType/mate.png');
    case '../../assets/image/teaType/matcha.png':
      return require('../../assets/image/teaType/matcha.png');
    case '../../assets/image/teaType/rooibos.png':
      return require('../../assets/image/teaType/rooibos.png');
    case '../../assets/image/teaType/infusion.png':
      return require('../../assets/image/teaType/infusion.png');
    default:
      return {uri: urlImage};
  }
};

const DetailTeaScreen = ({route}) => {
  const {selectedTea} = route.params;
  const [isFavorited, setIsFavorited] = useState(selectedTea.isFavorite);

  const toggleFav = async () => {
    try {
      const result = await isFavorite(selectedTea.id);
      setIsFavorited(result.isFavorite);
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  };

  const imageUrl = getImageSource(selectedTea.Image.urlImage);

  return (
    <ScrollView style={styles.container}>
      <ImageDetail imageUrl={imageUrl} />
      <View style={styles.overlay}>
        <HeaderDetail
          title={selectedTea.name}
          isFavorited={isFavorited}
          toggleFav={toggleFav}
        />
        <IconsDetail selectedTea={selectedTea} />
        <IngredientsDetail
          hasIngredientDetails={
            selectedTea.HasIngredients.map(item => item.Ingredient.name) ?? []
          }
        />
        <NotesDetail tips={selectedTea.tips} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overlay: {
    backgroundColor: '#FFFFFF',
    zIndex: 1,
    borderRadius: 20,
    marginTop: 212,
    paddingHorizontal: 16,
  },
});

export default DetailTeaScreen;
