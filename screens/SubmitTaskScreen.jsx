import React from 'react';
import { ImageBackground } from 'react-native';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/Header';
import Footer from '../components/Page-Format/Footer';
import TaskCreation from '../components/TaskCreation/TaskCreation';

const SubmitTask = ({route,navigation}) => {

  const { userId,userType } = route.params;
  return (
    <ImageBackground
      style={{      
      flex: 1,
      width: '100%',
      height: '100%',
      }}
      source={require('../assets/Backgrounds/bg1.png')}>
      <Header navigation={navigation} screenName={'Home'} visible={true}/>
      <TaskCreation navigation={navigation} userId={userId} />
      <Footer navigation={navigation} screenName={'SubmitTask'} userId={userId} userType={userType}/>
    </ImageBackground>
  );
};



export default SubmitTask;
