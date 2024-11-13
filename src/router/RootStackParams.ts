import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp} from '@react-navigation/native';
import {propsDataCard} from 'components/tabNav/tabsContainer/allMessages/allMessages';

// Stack principal
export type RootStackParamList = {
  Auth: undefined;
  MyDrawer: undefined;
};

// Stack de autenticación
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

// Stack del drawer
export type DrawerStackParamList = {
  Home: undefined;
  Profile: undefined;
  DetailsCard: {item: propsDataCard};
  CreateCard: undefined;
};

// Props para las pantallas del Auth Stack
export type AuthScreenProps<T extends keyof AuthStackParamList> = {
  navigation: NativeStackNavigationProp<AuthStackParamList, T>;
  route: RouteProp<AuthStackParamList, T>;
};

// Props para las pantallas del Drawer
export type DrawerScreenProps<T extends keyof DrawerStackParamList> = {
  navigation: DrawerNavigationProp<DrawerStackParamList, T>;
  route: RouteProp<DrawerStackParamList, T>;
};

// Props para el Root Stack
export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
