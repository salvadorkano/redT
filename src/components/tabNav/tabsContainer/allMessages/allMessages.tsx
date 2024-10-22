import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  Animated,
  Pressable,
} from 'react-native';
import allMessagesStyle from './allMessagesStyle';
import filter from 'lodash.filter';
import InputComponent from 'components/input/CustomInput';
import {colors} from 'colors';
import AllCards from 'components/cards/AllCards';
import ButtonComponent from 'components/button/button';
import {useNavigation} from '@react-navigation/native';
import {getNotices} from '../../../../services/apiService';

export interface propsDataCard {
  author: string;
  title: string;
  description: string;
  time: string;
  picture: string;
}

const AllMessage = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<propsDataCard[]>([]);
  const [fullData, setFullData] = useState<propsDataCard[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showButton, setShowButton] = useState<boolean>(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = 'Profe'; // This should be fetched from somewhere
        setShowButton(user === 'Profe');
      } catch (err) {
        console.error('Error fetching userName:', err);
      }
    };
    fetchUserName();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const results = await getNotices();
      setData(results);
      setFullData(results);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, (item: propsDataCard) => {
      return contains(item, formattedQuery);
    });
    setData(filteredData);
  };

  const contains = (item: propsDataCard, query: string) => {
    const {author, title, description} = item;
    const keywords = query.split(' ');

    return keywords.every(
      keyword =>
        author.toLowerCase().includes(keyword) ||
        title.toLowerCase().includes(keyword) ||
        description.toLowerCase().includes(keyword),
    );
  };

  if (isLoading) {
    return (
      <View style={allMessagesStyle.containerLoading}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    );
  }

  if (error) {
    return (
      <Pressable
        style={allMessagesStyle.containerError}
        onPress={() => fetchData()}>
        <Text>Error in Fetching data. Tap to retry.</Text>
      </Pressable>
    );
  }

  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={allMessagesStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        ListHeaderComponent={
          <Animated.View
            style={[allMessagesStyle.viewSearch, {transform: [{translateY}]}]}>
            <InputComponent
              style={allMessagesStyle.searchBox}
              placeholder="Buscar anuncio"
              value={searchQuery}
              onChange={handleSearch}
              placeholderColor={colors.neutral60}
            />
          </Animated.View>
        }
        keyExtractor={(item: propsDataCard, index) => `${item.author}+${index}`}
        renderItem={({item}) => <AllCards item={item} />}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={16}
      />
      {showButton && (
        <ButtonComponent
          onPress={() => navigation.navigate('CreateCard' as never)}
          styleButton={allMessagesStyle.buttonStyle}
          buttonText={'Nuevo anuncio'}
          styleText={allMessagesStyle.buttonText}
        />
      )}
    </SafeAreaView>
  );
};

export default AllMessage;
