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
import {useDispatch} from 'react-redux';
import {logout} from 'store/slices/authSlice';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const scrollRef = useRef<Animated.ScrollView>(null);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Auth');
  };

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value || 0, [0, 1], [300, 0]);
    return {
      transform: [{translateX}],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado del Drawer */}
      <Animated.View
        style={[styles.row, styles.view, styles.marginTop, viewStyles]}>
        <Text style={styles.headerTitle}>¡Hola!</Text>
      </Animated.View>

      {/* Opciones de navegación */}
      <Animated.ScrollView
        ref={scrollRef}
        {...props}
        showsVerticalScrollIndicator={false}
        style={[styles.marginVertical, viewStyles]}>
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

      {/* Botón de logout */}
      <TouchableOpacity onPress={handleLogout}>
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
