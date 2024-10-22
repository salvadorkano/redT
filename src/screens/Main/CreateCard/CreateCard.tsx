import logo from 'images/LogoTec.png';
import React, {useState} from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import {routerProps} from 'router/RootStackParams';
import styles from './CreateCardStyle';
import InputComponent from 'components/input/CustomInput';
import {colors} from 'colors';
import ButtonComponent from 'components/button/button';

function CreateCardScreen({navigation}: routerProps<'CreateCard'>) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.textBack}>Regresar</Text>
        </Pressable>
        <Text style={styles.textHeader}>Nuevo anuncio</Text>
        <Image style={styles.imageHeader} resizeMode="contain" source={logo} />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.textTitle}>Titulo del anuncio</Text>
        <InputComponent
          style={styles.inputTitle}
          placeholder="Titulo del anuncio"
          value={title}
          onChange={setTitle}
          placeholderColor={colors.neutral60}
        />
        <InputComponent
          style={styles.inputDes}
          placeholder="Escribe tu anuncio"
          value={description}
          onChange={setDescription}
          placeholderColor={colors.neutral60}
          multi={true}
        />
      </View>
      <ButtonComponent
        onPress={() => navigation.goBack()}
        styleButton={styles.buttonStyle}
        buttonText={'Publicar'}
        styleText={styles.buttonText}
      />
    </SafeAreaView>
  );
}

export default CreateCardScreen;
