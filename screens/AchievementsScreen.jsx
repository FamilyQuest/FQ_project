import React from 'react';
import { View, ImageBackground, I18nManager } from 'react-native';
import Achievements from '../components/Achievements/Achievements';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/Header';
import Footer from '../components/Page-Format/Footer';

const HomeScreen = ({route,navigation}) => {
  const { userId,userType } = route.params;
  return (
    <ImageBackground
      style={{height: "100%",width: "100%"}}
      source={require('../assets/Backgrounds/bg1.png')}>
      <Header navigation={navigation} screenName={'Achievements'} visible={true}/>
      <View style={{height: "100%",width: "100%"}}>
        <Achievements navigation={navigation} userId={userId} />
      </View>
      <Footer userId={userId} userType={userType} navigation={navigation} screenName={'Achievements'}/>
    </ImageBackground>

  );
};

export default HomeScreen;
