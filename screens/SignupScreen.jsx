import React from 'react';
import { ImageBackground, I18nManager} from 'react-native';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/Header';
import SignUp from '../components/Sign/SignUp';

const LoginScreen = ({navigation}) => {

  return (
    <ImageBackground
      style={{height: "100%",width: "100%"}}
      source={require('../assets/Backgrounds/bg1.png')}>
      <Header navigation={navigation} visible={true}/>
      <SignUp navigation={navigation}/>
    </ImageBackground>

  );
};

export default LoginScreen;
