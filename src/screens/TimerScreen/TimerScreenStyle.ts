import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const style = StyleSheet.create({
  timerView: {
    backgroundColor: colors.background,
    flex: 1,
  },
  countdownCircle: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  countdowns: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectTeas: {
    fontSize: 20,
    textAlign: 'center',
  },

  upView: {
    display: 'flex',
    padding: 16,
    gap: 27,
    alignItems: 'center',
    width: '100%',
    marginTop: 50,
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 5,
    shadowColor: colors.primary,
  },
  toCome: {
    display: 'flex',
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toComeText: {
    color: colors.text,
    fontSize: 20,
  },
  chrono: {
    display: 'flex',
    borderRadius: 8,
    gap: 8,
    padding: 16,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 90,
    width: 175,
    elevation: 5,
    shadowColor: colors.primary,
  },
  overScrollView: {
    flexGrow: 1,
    flex: 1,
  },
  teasSelected: {
    flexGrow: 1,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 16,
    gap: 8,
    height: 345,
  },
  teaName: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
  },
  teaTime: {
    fontWeight: '700',
    fontSize: 36,
    color: colors.text,
  },
  animation: {
    height: 110,
    aspectRatio: 1,
  },
  buttonsView: {
    display: 'flex',
    gap: 16,
    flexDirection: 'row',
    paddingBottom: 8,
  },

  button: {
    padding: 16,
    height: 48,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.darkPrimary,
    borderWidth: 0.2,
    borderRadius: 8,
    elevation: 5,
    shadowColor: colors.primary,
    width: 150,
  },
  buttonPlay: {},
  buttonReset: {},
});

export default style;
