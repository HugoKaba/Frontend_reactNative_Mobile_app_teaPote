import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RightArrow from '../../assets/icon/RightArrow';
const ModalOption = ({option}) => {
  const IconComponent = option.icon; // Récupère le composant de l'icône
  return (
    <TouchableOpacity style={styles.container} onPress={option.action}>
      <View style={styles.rightContainer}>
        <IconComponent />
        <Text style={styles.title}>{option.title}</Text>
      </View>
      <RightArrow />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
  },
});
export default ModalOption;
