import React from 'react';
import { ImageBackground, } from 'react-native';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/Header';
import Footer_v2 from '../components/Page-Format/Footer_v2';
import Login from '../components/LogIn';

const LoginScreen = () => {

  return (
    <ImageBackground
      style={{height: "100%",width: "100%"}}
      source={require('../assets/Backgrounds/bg1.png')}>
      <Header/>
      <Login/>
      <Footer_v2/>
    </ImageBackground>

  );
};

export default LoginScreen;
