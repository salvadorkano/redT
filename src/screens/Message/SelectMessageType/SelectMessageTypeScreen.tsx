import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';
import {colors} from 'colors';
import IconIndividual from 'icons/user_blue.png'; // Ícono para Individual
import IconGrupal from 'icons/grup_blue.png'; // Ícono para Grupal
import {normalize} from 'utils/normalize';

const SelectMessageTypeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Botón de Regresar */}
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Regresar</Text>
      </Pressable>

      {/* Encabezado */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Nuevo mensaje</Text>
        <Text style={styles.subHeader}>Selecciona el tipo de mensaje</Text>
      </View>

      {/* Botones de selección */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.card}
          onPress={() =>
            navigation.navigate('CreateMessage', {type: 'Directos'})
          }>
          <Image source={IconIndividual} style={styles.icon} />
          <Text style={styles.cardText}>Individual</Text>
        </Pressable>
        <Pressable
          style={styles.card}
          onPress={() =>
            navigation.navigate('CreateMessage', {type: 'Grupal'})
          }>
          <Image source={IconGrupal} style={styles.icon} />
          <Text style={styles.cardText}>Grupal</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 20,
    marginLeft: 10,
  },
  backText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.titleText,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: colors.subTitle,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  card: {
    flex: 1,
    backgroundColor: colors.neutral05,
    marginHorizontal: 10,
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: normalize(120),
  },
  cardText: {
    fontSize: 16,
    color: colors.titleText,
    fontWeight: 'bold',
    marginTop: 10,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default SelectMessageTypeScreen;
