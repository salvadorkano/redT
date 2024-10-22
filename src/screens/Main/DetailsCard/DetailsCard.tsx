import logo from 'images/LogoTec.png';
import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import {routerProps} from 'router/RootStackParams';
import styles from './DetailsCardStyle';

function DetailsCardScreen({navigation, route}: routerProps<'DetailsCard'>) {
  const {author, title, description, picture} = route.params.item;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.textBack}>Regresar</Text>
        </Pressable>
        <Image style={styles.imageHeader} resizeMode="contain" source={logo} />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerImageTitle}>
          <View style={styles.containerRow}>
            <Image source={{uri: picture}} style={styles.image} />
            <View>
              <Text style={styles.textAuthor}>{author}</Text>
              <Text style={styles.textTime}>20/Nov/2023 - 1:30 PM</Text>
            </View>
          </View>
        </View>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDescription}>{description}</Text>
      </View>
    </SafeAreaView>
  );
}

export default DetailsCardScreen;
