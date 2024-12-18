import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: colors.background,
  },
  header: {
    position: 'relative',
    paddingTop: 8,
  },
  backArrow: {
    position: 'absolute',
    left: 24,
    top: '50%',
    transform: [{translateY: -15}],
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingTop: 32,
    marginTop: 8,
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  secondTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  teaListContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  teaItem: {
    alignItems: 'center',
    margin: 8,
    padding: 8,
  },
  teaImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderWidth: 2,

    borderRadius: 10,
  },
  teaType: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionsContainer: {},
  optionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  centerText: {
    textAlign: 'center',
  },
  timeOfDayContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeOfDayButton: {
    alignItems: 'center',
    margin: 8,
    padding: 8,
  },
  timeOfDayIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,
  },
  timeOfDayText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedTimeOfDay: {
    backgroundColor: colors.lightPrimary,
    borderRadius: 8,
  },
  organicContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  bioOption: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 8,

    // width: '28%',
  },
  bioIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
  },
  bioText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedTeaText: {
    borderRadius: 8,
    position: 'relative',
  },
  selectedTeaIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -10}, {translateY: -15}],
  },
  sliderValuesContainer: {
    width: '100%',
    marginBottom: 10,
  },
  slider: {
    // width: 280,
    height: 40,
    transform: [{scale: 1.3}],
    alignSelf: 'center',
  },
  sliderValueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  otherTimeContainer: {
    alignItems: 'center',
  },
  teabagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 24,
  },
  teabagLabel: {
    fontSize: 16,
    width: 70,
  },
  countryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightPrimary,
  },
  countryList: {
    maxHeight: 150,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.lightPrimary,
    borderRadius: 8,
    marginHorizontal: 8,
    marginTop: 5,
  },
  ingredientItem: {
    padding: 8,

    borderBottomWidth: 1,
    borderBottomColor: colors.lightPrimary,
    fontSize: 16,
  },
  ingredientList: {
    borderColor: colors.lightPrimary,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 4,
    margin: 8,
    // padding: 4,
  },
  inputContainer: {
    position: 'relative',
    padding: 16,
    width: '100%',
  },
  inputIngredient: {
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 10,
    paddingRight: 60,
    marginBottom: 20,
  },
  addButton: {
    display: 'flex',
    justifyContent: 'center',

    position: 'absolute',
    right: 21,
    top: 21,
    backgroundColor: colors.darkPrimary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 35,
  },
  addButtonText: {
    color: '#fff',
  },

  selectedIngredientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    // height: 25,
    backgroundColor: colors.lightPrimary,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 16,
    borderColor: colors.primary,
  },
  selectedIngredientText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    textAlign: 'left',
  },
  removeButton: {
    marginRight: 10,
  },
  removeButtonText: {
    color: 'black',
  },
  subtitle: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  addTeaBtn: {
    marginTop: 16,
    backgroundColor: colors.tea['Thé Vert'].background,
    borderRadius: 8,
    borderColor: colors.tea['Thé Vert'].color,
    borderWidth: 1,
    shadowColor: colors.primary,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  addTeaText: {
    // color: 'white',
    padding: 16,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeModalBtn: {
    marginTop: 20,
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  closeModalText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
