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
import {useAppSelector} from 'store/hooks';

function ProfileScreen({navigation}: routerProps<'Profile'>) {
  const {user} = useAppSelector(state => state.auth);

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
          <Text style={styles.name}>{user?.fullName}</Text>
          <Text style={styles.textInfo}>No. Control: {user?.username}</Text>
          <Text style={styles.textInfo}>{user?.email}</Text>
          <Text style={styles.textInfo}>{user?.role}</Text>
          {/* <Text style={styles.editInfoText}>Editar información</Text> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
