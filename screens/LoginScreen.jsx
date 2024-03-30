import React from 'react';
import { I18nManager,View } from 'react-native';
import styles from './Screen.style'
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/LoginHeader';
import Login from '../components/Login/LogIn';

const LoginScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Header navigation={navigation} visible={true}/>
      <Login navigation={navigation}/>
      <View style={styles.ball1} />
      <View style={styles.ball2} />
      <View style={styles.ball3} />
    </View>

  );
};

export default LoginScreen;
