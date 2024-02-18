import React from 'react';
import { ImageBackground } from 'react-native';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from './Page-Format/Header';
import Footer from './Page-Format/Footer';
import TaskCreation from './TaskCreation';

const PageTemplate = () => {


  return (
    <ImageBackground
      style={{      
      flex: 1,
      width: '100%',
      height: '100%',
      }}
      source={require('../assets/Backgrounds/bg1.png')}>
      <Header />
      <TaskCreation/>
      <Footer />
    </ImageBackground>
  );
};



export default PageTemplate;
