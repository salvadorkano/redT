import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: normalize(20),
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSearch: {
    marginBottom: normalize(20),
    marginTop: normalize(10),
  },
  searchBox: {
    backgroundColor: colors.neutral05,
    marginTop: 0,
    borderRadius: 12,
    height: 50,
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textName: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
  },
  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: 'grey',
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
