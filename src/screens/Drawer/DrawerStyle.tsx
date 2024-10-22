import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
};

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    backgroundColor: colors.white,
    borderRadius: constant.borderRadius,
    marginHorizontal: constant.SPACING / 2,
    padding: constant.SPACING / 1.5,
  },
  marginTop: {
    marginTop: constant.SPACING / 2,
  },
  marginBottom: {
    marginBottom: constant.SPACING / 2,
  },
  marginVertical: {
    marginVertical: constant.SPACING / 2,
    backgroundColor: colors.white,
    borderRadius: constant.borderRadius,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: constant.titleFontSize,
    color: colors.dark,
  },
  itemDrawer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  imageProfile: {
    width: normalize(16),
    height: normalize(16),
    marginLeft: 10,
  },
  textDrawer: {
    color: colors.gray1,
    textAlign: 'center',
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: '500',
  },
});
