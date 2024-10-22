import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AllCardsStyle from './AllCardsStyle';
import {propsDataCard} from 'components/tabNav/tabsContainer/allMessages/allMessages';
import {useNavigation} from '@react-navigation/native';

const AllCards = (props: {item: propsDataCard}) => {
  const navigation = useNavigation();
  const {author, title, description, time, picture} = props.item;

  const handlePress = () => {
    navigation.navigate<'DetailsCard'>('DetailsCard', {
      item: props.item,
    });
  };
  return (
    <TouchableOpacity style={AllCardsStyle.itemContainer} onPress={handlePress}>
      <View style={AllCardsStyle.containerImageTitle}>
        <View style={AllCardsStyle.containerRow}>
          <Image source={{uri: picture}} style={AllCardsStyle.image} />
          <Text style={AllCardsStyle.textAuthor}>{author}</Text>
        </View>
        <Text style={AllCardsStyle.textTime}>{time}</Text>
      </View>
      <Text style={AllCardsStyle.textTitle}>{title}</Text>
      <Text style={AllCardsStyle.textDescription} numberOfLines={1}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};
export default AllCards;
