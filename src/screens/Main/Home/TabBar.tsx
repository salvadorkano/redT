import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

const TABS = ['Todos', 'Directos', 'Grupal'];

interface TabBarProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

const TabBar: React.FC<TabBarProps> = ({activeTab, onTabChange}) => {
  const underlineOffset = useRef(new Animated.Value(0)).current;

  const handleTabPress = (index: number) => {
    onTabChange(index);

    // Animar la línea azul
    Animated.spring(underlineOffset, {
      toValue: index * (Dimensions.get('window').width / TABS.length),
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {TABS.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            onPress={() => handleTabPress(index)}
            style={styles.tabButton}>
            <Text
              style={[
                styles.tabText,
                activeTab === index && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Línea azul animada */}
      <Animated.View
        style={[
          styles.underline,
          {
            transform: [{translateX: underlineOffset}],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#8E8E8E',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    height: 3, // Conservamos altura de 3
    width: 50, // Línea más delgada centrada bajo el texto
    backgroundColor: '#007BFF',
    left: (Dimensions.get('window').width / TABS.length - 50) / 2, // Centramos manualmente
  },
});

export default TabBar;
