import React from 'react';
import {View, Text, StyleSheet, TextStyle} from 'react-native';

interface NotesDetailProps {
  tips: string;
}

const NotesDetail: React.FC<NotesDetailProps> = ({tips}) => {
  const truncateText = (text: string, delimiter: string, count: number) => {
    if (!text) return '';
    const parts = text.split(delimiter);
    return parts.length > count ? parts.slice(0, count).join(delimiter) : text;
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Note:</Text>
      <Text style={styles.notes}>{truncateText(tips, '.', 4)}</Text>
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
  notes: {
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 6,
  } as TextStyle,
});

export default NotesDetail;
