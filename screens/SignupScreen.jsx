import React from 'react';
import { ImageBackground, I18nManager,StyleSheet,View } from 'react-native';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from '../components/Page-Format/Header';
import SignUp from '../components/Sign/SignUp';

const LoginScreen = ({navigation}) => {

  return (
    <ImageBackground
      style={styles.container}>
      <Header navigation={navigation} visible={true}/>
      <SignUp navigation={navigation}/>
      <View style={styles.ball1} />
      <View style={styles.ball2} />
      <View style={styles.ball3} />
    </ImageBackground>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  ball1: {
    position: 'absolute',
    backgroundColor: '#FFA8A6',
    width: 175,
    height: 175,
    borderRadius: 100,
    top: 100, 
    left: 20, 
    zIndex:-1,
  },
  ball2: {
    position: 'absolute',
    backgroundColor: '#FFA8A6',
    width: 175,
    height: 175,
    borderRadius: 100,
    top:585 , 
    left: -50, 
    zIndex:-1,
  },
  ball3: {
    position: 'absolute',
    backgroundColor: '#FFA8A6',
    width: 175,
    height: 175,
    borderRadius: 100,
    top: 350, 
    left: 200, // Adjust as needed
    zIndex:-1,
  },
});
export default LoginScreen;
