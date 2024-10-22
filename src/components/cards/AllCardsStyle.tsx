import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginVertical: normalize(10),
    marginHorizontal: normalize(10),
    borderRadius: 5,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderStyle: 'solid',
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(10),
  },
  containerImageTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerRow: {
    flexDirection: 'row',
  },
  image: {
    width: normalize(23),
    height: normalize(23),
    borderRadius: 7,
  },
  textAuthor: {
    color: colors.gray1,
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(22),
    marginLeft: normalize(10),
  },
  textTime: {
    color: colors.green2,
    fontSize: normalize(12),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(22),
    textAlign: 'right',
  },
  textTitle: {
    color: colors.subTitle,
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(22),
    marginTop: 10,
  },
  textDescription: {
    color: colors.description,
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: normalize(22),
    overflow: 'hidden',
  },
});
