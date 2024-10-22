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
    marginTop: normalize(50),
    flex: 1,
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
    flex: 1.5,
  },
  containerButton: {flex: 1},
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
  styleForgotPassword: {
    alignSelf: 'flex-end',
    color: colors.titleText,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
  },
  styleTextButton: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: 0.32,
  },
  textRegister: {
    color: colors.subTitle,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
    textAlign: 'center',
    marginTop: normalize(13),
  },
  textRegisterBlue: {
    color: colors.primary,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 28,
  },
});
