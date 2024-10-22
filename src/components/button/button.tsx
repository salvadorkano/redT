import {colors} from 'colors';
import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {normalize} from 'utils/normalize';
import styles from './styles';

interface propsButtonComponent {
  styleButton: ViewStyle;
  styleText?: TextStyle;
  onPress(): void;
  loading?: boolean;
  disabled?: boolean | undefined;
  buttonText: string;
}
function ButtonComponent(props: propsButtonComponent) {
  const {disabled, onPress, loading, styleButton, buttonText, styleText} =
    props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disabled}
      onPress={() => (loading === true ? null : onPress())}
      style={[
        styleButton,
        styles.button,
        {
          height: styleButton.height ?? normalize(45),
          backgroundColor: styleButton?.backgroundColor ?? colors.black,
          width: styleButton?.width ?? '100%',
          marginTop: styleButton?.marginTop ?? normalize(5),
        },
      ]}>
      {loading === true ? (
        <ActivityIndicator size="large" color="white" style={styles.center} />
      ) : (
        <Text style={[styles.btnText, styleText]}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
}

export default ButtonComponent;
