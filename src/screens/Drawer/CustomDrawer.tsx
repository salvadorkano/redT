import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer';
import door from 'icons/door.png';
import user from 'icons/user.png';
import React, {useRef} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import styles from './DrawerStyle';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const {navigation} = props;
  const scrollRef = useRef<Animated.ScrollView>(null);

  const logOut = () => {
    navigation.navigate('Auth');
  };

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value, [0, 1], [300, 0]);
    return {
      transform: [{translateX}],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.row, styles.view, styles.marginTop, viewStyles]}>
        <Text style={styles.headerTitle}>¡Hola!</Text>
      </Animated.View>
      <Animated.ScrollView
        ref={scrollRef}
        {...props}
        showsVerticalScrollIndicator={false}
        style={[styles.marginVertical, viewStyles]}>
        {/* <DrawerItemList {...props} /> */}
        <Animated.View style={[styles.view, styles.marginTop, viewStyles]}>
          <Pressable
            onPress={() => navigation.navigate('Profile')}
            style={styles.itemDrawer}>
            <Text style={styles.textDrawer}>Perfil</Text>
            <Image
              style={styles.imageProfile}
              resizeMode="contain"
              source={user}
            />
          </Pressable>
        </Animated.View>
      </Animated.ScrollView>
      <TouchableOpacity onPress={logOut}>
        <Animated.View
          style={[styles.row, styles.view, styles.marginBottom, viewStyles]}>
          <Text style={styles.textDrawer}>Cerrar sesión</Text>
          <Image
            style={styles.imageProfile}
            resizeMode="contain"
            source={door}
          />
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
