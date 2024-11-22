import React from 'react';
import {View, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import {colors} from 'colors';
import IconIndividual from 'icons/door.png'; // Asegúrate de incluir este ícono
import IconGrupal from 'icons/user.png'; // Asegúrate de incluir este ícono
import {Image} from 'react-native';

const SelectMessageTypeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Nuevo mensaje</Text>
      <Text style={styles.subHeader}>Selecciona el tipo de mensaje</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.card}
          onPress={() =>
            navigation.navigate('CreateMessage', {type: 'Individual'})
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
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
