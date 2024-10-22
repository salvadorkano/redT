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
  textHeader: {
    fontSize: normalize(18),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: normalize(28),
    textAlign: 'center',
  },
  textBack: {
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(28),
  },
  textTitle: {
    color: colors.subTitle,
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(22),
    marginTop: 10,
  },
  imageHeader: {
    width: normalize(42),
    height: normalize(41),
  },
  containerForm: {
    marginTop: normalize(80),
    paddingBottom: normalize(150),
    paddingHorizontal: normalize(20),
  },
  inputTitle: {
    backgroundColor: colors.neutral05,
    marginTop: 0,
    borderRadius: 12,
    height: 50,
    marginVertical: 10,
  },
  inputDes: {
    backgroundColor: colors.neutral05,
    marginTop: normalize(23),
    borderRadius: 12,
    marginVertical: 10,
    height: normalize(200),
    textAlignVertical: 'top',
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    height: 50,
    margin: 10,
    marginTop: normalize(25),
  },
  buttonText: {
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: normalize(26),
    letterSpacing: 0.32,
    color: colors.white,
  },
});
