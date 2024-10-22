import {StyleSheet} from 'react-native';
import {colors} from 'colors';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    borderRadius: normalize(7),
  },
  btnText: {
    alignSelf: 'center',
    fontSize: normalize(15),
    color: colors.white,
  },
  center: {alignSelf: 'center'},
});
