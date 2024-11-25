import React from 'react';
import {View, Text, StyleSheet, TextStyle} from 'react-native';

interface IngredientsDetailProps {
  hasIngredientDetails: string[];
}

const IngredientsDetail: React.FC<IngredientsDetailProps> = ({
  hasIngredientDetails,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Ingrédients:</Text>
      <Text style={styles.ingredients}>
        {hasIngredientDetails.length > 0
          ? hasIngredientDetails.join(', ')
          : "aucun ingrédient n'a été précisé pour ce thé"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  } as TextStyle,
  ingredients: {
    marginTop: 5,
    fontSize: 16,
  } as TextStyle,
});

export default IngredientsDetail;
