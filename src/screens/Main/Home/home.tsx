import {DrawerActions} from '@react-navigation/native';
import menu from 'icons/iconMenu.png';
import profilePic from 'images/pp.png';
import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import {routerProps} from 'router/RootStackParams';
import homeStyle from './homeStyle';
// import TabNavs from 'components/tabNav/tabNav';

function HomeScreen({navigation}: routerProps<'Home'>) {
  return (
    <SafeAreaView style={homeStyle.container}>
      <View style={homeStyle.containerHeader}>
        <View style={homeStyle.viewImage}>
          <Image source={profilePic} />
        </View>
        <View style={homeStyle.viewText}>
          <Text style={homeStyle.textFormat}>¡Bienvenido Fernando!</Text>
        </View>
        <View style={homeStyle.viewMenu}>
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image source={menu} />
          </Pressable>
        </View>
      </View>
      {/* <FlatList
        data={datos}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={(item, index) =>
          `index ${index} - item: ${item.id.toString()}`
        }
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        removeClippedSubviews={true}
      /> */}
      <View style={homeStyle.containerTabNab}>{/* <TabNavs /> */}</View>
    </SafeAreaView>
  );
}

export default HomeScreen;
