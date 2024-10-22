import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from 'colors';
import {normalize} from 'utils/normalize';

export const styling = (
  leftText?: number,
  style?: ViewStyle,
  multi?: boolean,
  editable?: boolean,
  placeholderIsTop?: boolean,
  isAdd?: boolean,
) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      flex: 1,
    },
    textTop: {
      fontSize: normalize(11),
      marginLeft: leftText ?? normalize(15),
      paddingBottom: leftText === 5 ? 0 : normalize(8),
    },
    textPrincp: {
      color: colors.white,
    },
    fs11: {
      fontSize: normalize(11),
    },
    containerInput: {
      flexDirection: 'row',
      backgroundColor: style?.backgroundColor ?? colors.white,
      height: style?.height ? style?.height : normalize(45),
      borderRadius: style?.borderRadius ?? normalize(8),
    },
    inputStyle: {
      flex: 1,
      paddingTop: multi ? '5%' : normalize(8),
      paddingLeft: style?.paddingLeft ?? normalize(15),
      fontSize: normalize(13),
      textAlign: 'auto',
      color: editable === false ? 'grey' : colors.black,
      textAlignVertical: placeholderIsTop ? 'top' : 'center',
    },
    rightImageStyle: {
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: 'center',
    },
    imgStyle: {
      width: isAdd ? normalize(20) : normalize(15),
      height: isAdd ? normalize(20) : normalize(15),
      alignSelf: 'center',
    },
    passwordStyle: {
      paddingLeft: 5,
      paddingRight: 10,
      justifyContent: 'center',
    },
    imgPassword: {
      width: normalize(18),
      height: normalize(18),
      alignSelf: 'center',
    },
  });
