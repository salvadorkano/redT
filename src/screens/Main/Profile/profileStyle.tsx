import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: normalize(20),
  },
  containerHeader: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBack: {
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(28),
  },
  imageHeader: {
    width: normalize(42),
    height: normalize(41),
  },
  containerProfile: {
    flexDirection: 'column',
    borderColor: colors.neutral05,
    borderWidth: 1,
    marginTop: normalize(80),
    borderRadius: normalize(27),
    paddingBottom: normalize(150),
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgProfile: {
    width: normalize(130),
    height: normalize(130),
    borderRadius: normalize(46),
    borderWidth: 6,
    borderColor: colors.white,
    top: normalize(50),
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    top: normalize(83),
  },
  name: {
    color: colors.titleText,
    textAlign: 'center',
    fontSize: normalize(20),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: normalize(28),
  },
  textInfo: {
    color: colors.text,
    textAlign: 'center',
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: normalize(24),
    marginVertical: normalize(5),
  },
  editInfoText: {
    top: normalize(30),
    color: colors.primary,
    textAlign: 'center',
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(28),
    marginVertical: normalize(5),
  },
});
