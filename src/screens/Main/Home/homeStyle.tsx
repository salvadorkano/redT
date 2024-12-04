import {colors} from 'colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerTabNab: {
    flex: 10,
  },

  // Header
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

  // Search
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

  // Tabs
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
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },

  // Messages
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
  details: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    fontStyle: 'italic',
  },

  // New Message Button
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

  // States
  noMessagesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  noMessagesText: {
    fontSize: 16,
    color: '#A1A1A1',
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

  // Removed unused styles
});
