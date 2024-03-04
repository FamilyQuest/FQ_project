import React from 'react';
import { ImageBackground, I18nManager,View} from 'react-native';
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/LoginHeader';
import Login from '../components/Login/LogIn';

const LoginScreen = ({navigation}) => {

  return (
    <View>
      <Header navigation={navigation} visible={true}/>
      <Login navigation={navigation}/>
    </View>

  );
};

export default LoginScreen;
