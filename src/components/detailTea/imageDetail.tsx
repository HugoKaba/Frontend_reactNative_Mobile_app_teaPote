import React from 'react';
import {View, Image, Text, StyleSheet, ImageStyle} from 'react-native';

interface ImageDetailProps {
  imageUrl?: any;
}

const ImageDetail: React.FC<ImageDetailProps> = ({imageUrl}) => {
  return (
    <View style={styles.imageContainer}>
      {imageUrl ? (
        typeof imageUrl === 'string' ? (
          <Image style={styles.teaImage} source={{uri: imageUrl}} />
        ) : (
          <Image style={styles.teaImage} source={imageUrl} />
        )
      ) : (
        <Text>Image non disponible</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 222,
    zIndex: -1,
  },
  teaImage: {
    zIndex: 0,
    width: '100%',
    height: 222,
    transform: [{scale: 2}, {translateX: 2}, {translateY: -50}],
    resizeMode: 'cover',
    overflow: 'hidden',
  } as ImageStyle,
});

export default ImageDetail;
