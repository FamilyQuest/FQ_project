import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, StatusBar, Text, Modal, BackHandler, Linking  } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import styles from './header.style';

function Header({ screenName, visible }) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (navigation.canGoBack()) {
        goBack(screenName);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const goBack = (screenName) => {
    if (screenName && screenName === "Login") {
      openModal();
    } else {
      navigation.goBack();
    }
  };

  const openModal = () => {
    setLogoutModalVisible(true);
  };

  const closeModal = () => {
    setLogoutModalVisible(false);
  };

  if(!visible) return null;

  return (
    <View>
      <StatusBar backgroundColor={"#A4E7DD"} />
      <View style={styles.topScreenContainer}><Image style={styles.headerImg} source={require('../../assets/General/Header.png')} /></View>
      <View style={styles.header}>
        {isFocused && navigation.canGoBack() && (
          <TouchableOpacity style={styles.headerButton} onPress={() => goBack(screenName)} >
            <Image style={styles.headerButtonImg} source={require('../../assets/General/Back.png')} />
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.logoutModalContent}>
            <Text style={styles.modalTitle}>Would you like to log out?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.Btn1} onPress={closeModal}>
                <Text style={styles.textBtn}>Not yet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Btn2} onPress={() => navigation.goBack()}>
                <Text style={styles.textBtn}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Header;
