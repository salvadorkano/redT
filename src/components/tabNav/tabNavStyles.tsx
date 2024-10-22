import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {width} from 'utils/dimensions';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: width,
    // backgroundColor: 'red',
  },
  tabsContainer: {
    width: width,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tabText: {
    fontSize: normalize(45) / 3,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  indicator: {
    position: 'absolute',
    height: 1,
    left: 0,
    backgroundColor: colors.primary,
    bottom: -5,
  },
});
