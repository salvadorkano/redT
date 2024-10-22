import {colors} from 'colors';
import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Dimensions,
  Animated,
  Text,
  TouchableOpacity,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import AllMessage from './tabsContainer/allMessages/allMessages';
import styles from './tabNavStyles';

const {width: widthScreen} = Dimensions.get('screen');

// Crear un FlatList animado
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

type TabData = {
  key: string;
  title: string;
  children: React.ReactNode;
};

const dataTabs: Record<string, React.ReactNode> = {
  Todos: <AllMessage />,
  // Individual: <DirectMessage />,
  // Grupo: <GroupMessage />,
};

const data: TabData[] = Object.keys(dataTabs).map(key => ({
  key,
  title: key,
  children: dataTabs[key],
}));

type TabProps = {
  item: TabData;
  onItemPress: () => void;
  isSelected: boolean;
};

const Tab: React.FC<TabProps> = ({item, onItemPress, isSelected}) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <Text
        style={[
          styles.tabText,
          {color: isSelected ? colors.primary : colors.grayText},
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

type TabsProps = {
  data: TabData[];
  onItemPress: (itemIndex: number) => void;
  selectedTabIndex: number;
};

const Tabs: React.FC<TabsProps> = ({data, onItemPress, selectedTabIndex}) => {
  return (
    <View style={styles.tabsContainer}>
      <View style={styles.tabs}>
        {data.map((item, index) => (
          <Tab
            key={item.key}
            item={item}
            onItemPress={() => onItemPress(index)}
            isSelected={selectedTabIndex === index}
          />
        ))}
      </View>
    </View>
  );
};

export default function TabNavs() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<TabData>>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const onItemPress = useCallback((itemIndex: number) => {
    flatListRef.current?.scrollToOffset({
      offset: itemIndex * widthScreen,
      animated: true,
    });
    setSelectedTabIndex(itemIndex);
  }, []);

  const onScroll = Animated.event<NativeSyntheticEvent<NativeScrollEvent>>(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: true},
  );

  return (
    <View style={styles.container}>
      <View>
        <Tabs
          data={data}
          onItemPress={onItemPress}
          selectedTabIndex={selectedTabIndex}
        />
      </View>
      <AnimatedFlatList
        ref={flatListRef}
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(
          event: NativeSyntheticEvent<NativeScrollEvent>,
        ) => {
          const currentIndex = Math.floor(
            event.nativeEvent.contentOffset.x / widthScreen,
          );
          setSelectedTabIndex(currentIndex);
        }}
        renderItem={({item}) => (
          <View style={[styles.itemContainer, {width: widthScreen}]}>
            {item.children}
          </View>
        )}
      />
    </View>
  );
}
