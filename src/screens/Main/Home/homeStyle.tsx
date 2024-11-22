import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  containerHeader: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginHorizontal: normalize(20),
    marginVertical: normalize(20),
  },
  viewImage: {
    flex: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: normalize(10),
  },
  viewMenu: {
    flex: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: normalize(10),
  },
  textFormat: {
    color: colors.titleText,
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 28,
  },
  containerSearch: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: normalize(20),
  },
  containerTabNab: {
    flex: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#000',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    color: '#A1A1A1',
    fontSize: 14,
  },
  activeTabText: {
    color: colors.primary,
  },
  messagesList: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFF',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  sender: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  time: {
    fontSize: 12,
    color: '#A1A1A1',
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#000',
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  newMessageButton: {
    backgroundColor: colors.primary,
    margin: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  newMessageButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  noMessagesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  noMessagesText: {
    fontSize: 16,
    color: '#A1A1A1', // Un color neutro para el texto.
    textAlign: 'center',
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: colors.neutral60,
  },
});
