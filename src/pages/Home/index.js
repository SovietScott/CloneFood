import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView, Image, View, ButtonContainer} from './style';
import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Home({navigation}){
  return(
    <>
      <StatusBar style="theme-dark"/>
      <SafeAreaView>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Pedir comida nunca foi tão fácil</Text>
          <Image source={banner}/>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Permitir localização</Text>
          <Text>Descubra restaurantes que entregam em sua localização</Text>
        </View>
        <ButtonContainer>
          <Button text="Pular" onPress={() => navigation.navigate('Main')}/>
          <Button text="Entrar" theme="primary"/>
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
};

