import React from 'react';
import { View, ImageBackground, I18nManager,SafeAreaView,StatusBar } from 'react-native';
import AvatarCreationForm from '../components/Avatar/AvatarCreationForm';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/Header';
import Footer from '../components/Page-Format/Footer';

const AvatarScreen = ({ route, navigation }) => {
  const { userId,userType } = route.params;

  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require('../assets/Backgrounds/bg1.png')}>
      <Header navigation={navigation} screenName={'Home'} visible={true} />
      <View style={{ height: "100%", width: "100%" }}>
        <SafeAreaView>
          <StatusBar backgroundColor="#A4E7DD" barStyle="dark-content" />
          <AvatarCreationForm userId={userId} navigation={navigation}/>
        </SafeAreaView>
      </View>
      <Footer userId={userId} userType={userType} navigation={navigation} screenName={'Avatar'}/>
    </ImageBackground>

  );
};

export default AvatarScreen;
