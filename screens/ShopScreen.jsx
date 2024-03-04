import React from 'react';
import { View, ImageBackground, I18nManager,SafeAreaView,StatusBar } from 'react-native';
// import AvatarCreationForm from '../components/Avatar/AvatarCreationForm';
import ShopCreation from '../components/Shop/ShopCreation';
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/Header';
import Footer from '../components/Page-Format/Footer';

const ShopScreen = ({ route, navigation }) => {
  const { userId } = route.params;

  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require('../assets/Backgrounds/bg1.png')}>
      <Header navigation={navigation} screenName={'Home'} visible={true} />
      <View style={{ height: "100%", width: "100%" }}>
          <StatusBar backgroundColor="#A4E7DD" barStyle="dark-content" />

          <ShopCreation userId={userId} navigation={navigation}/>

      </View>

      <Footer userId={userId} navigation={navigation} screenName={'Shop'}/>
    </ImageBackground>

  );
};

export default ShopScreen;
