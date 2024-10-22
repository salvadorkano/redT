import ProfileBG from 'images/ProfileBG.png';
import ProfileP from 'images/ProfilePicture.png';
import logo from 'images/LogoTec.png';
import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {routerProps} from 'router/RootStackParams';
import styles from './profileStyle';

function ProfileScreen({navigation}: routerProps<'Profile'>) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.textBack}>Regresar</Text>
        </Pressable>
        <Image style={styles.imageHeader} resizeMode="contain" source={logo} />
      </View>
      <View style={styles.containerProfile}>
        <ImageBackground source={ProfileBG} style={styles.backgroundImage}>
          <Image source={ProfileP} style={styles.imgProfile} />
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Fernando Reyes Gonzalez</Text>
          <Text style={styles.textInfo}>No. Control: 1506242</Text>
          <Text style={styles.textInfo}>Andres_22@gmail.com</Text>
          <Text style={styles.textInfo}>222-222-2222</Text>
          {/* <Text style={styles.editInfoText}>Editar información</Text> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
