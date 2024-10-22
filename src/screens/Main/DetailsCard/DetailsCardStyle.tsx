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
  },
  containerInfo: {
    marginTop: normalize(30),
    marginHorizontal: normalize(10),
  },
  containerRow: {
    flexDirection: 'row',
  },
  image: {
    width: normalize(43),
    height: normalize(43),
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
    color: colors.description,
    fontSize: normalize(12),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(22),
    marginLeft: normalize(10),
  },
  textTitle: {
    color: colors.subTitle,
    fontSize: normalize(20),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(22),
    marginVertical: 20,
  },
  textDescription: {
    color: colors.gray1,
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(22),
    overflow: 'hidden',
  },
});
