import React from 'react';
import { ImageBackground, I18nManager,View } from 'react-native';
import styles from './Screen.style'

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/Header';
import SignUp from '../components/Sign/SignUp';

const LoginScreen = ({navigation}) => {

  return (
    <ImageBackground
      style={styles.container}>
      <Header navigation={navigation} visible={true}/>
      <SignUp navigation={navigation}/>
      <View style={styles.ball1} />
      <View style={styles.ball2} />
      <View style={styles.ball3} />
    </ImageBackground>

  );
};
export default LoginScreen;
