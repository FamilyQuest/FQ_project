import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { I18nManager } from "react-native";
import SubHeader from './SubHeaderWelcomPage';
import TaskList from './ListForWelcomPage';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from './Page-Format/Header';
import Footer from './Page-Format/Footer';

const PageTemplate = () => {

  return (
    <ImageBackground
      style={{height: "100%",width: "100%"}}
      source={require('../assets/Backgrounds/bg1.png')}>
      <Header/>
      <View style={{height: "100%",width: "100%"}}>
        <SubHeader/>

      </View>
      <Footer/>
    </ImageBackground>

  );
};

export default PageTemplate;
