import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: normalize(30),
    backgroundColor: colors.white,
  },
  containerScroll: {
    flex: 1,
  },
  containerImg: {
    marginTop: normalize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitle: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  principalTitle: {
    color: colors.titleText,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
  },
  secundaryTitle: {
    color: colors.subTitle,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
  },
  containerForm: {
    flex: 2,
  },
  containerButton: {
    flex: 1,
  },
  inputEmail: {
    backgroundColor: colors.neutral05,
  },
  styleError: {
    alignSelf: 'flex-end',
    color: colors.red,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalize(20),
  },
  roleButton: {
    flex: 1,
    paddingVertical: normalize(10),
    marginHorizontal: normalize(5),
    borderWidth: 1,
    borderColor: colors.neutral60,
    borderRadius: normalize(8),
    alignItems: 'center',
  },
  roleButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  roleText: {
    color: colors.neutral60,
    fontSize: 14,
    fontWeight: '500',
  },
  roleTextActive: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  styleTextButton: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: 0.32,
  },
  textLogin: {
    color: colors.subTitle,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
    textAlign: 'center',
    marginTop: normalize(13),
  },
  textLoginBlue: {
    color: colors.primary,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 28,
  },
});
