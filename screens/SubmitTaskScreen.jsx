import React from 'react';
import { ImageBackground, View } from 'react-native';
import { I18nManager } from "react-native";
import styles from './Screen.style'

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/Header';
import Footer from '../components/Page-Format/Footer';
import TaskCreation from '../components/TaskCreation/TaskCreation';

const SubmitTask = ({route,navigation}) => {

  const { userId,userType } = route.params;
  return (
    <ImageBackground style={styles.container}>
      <Header navigation={navigation} screenName={'Home'} visible={true}/>
      <TaskCreation navigation={navigation} userId={userId} />
      <View style={styles.ball1} />
      <View style={styles.ball2} />
      <View style={styles.ball3} />
      <Footer navigation={navigation} screenName={'SubmitTask'} userId={userId} userType={userType}/>
    </ImageBackground>
  );
};



export default SubmitTask;
