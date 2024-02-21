import React, { useState } from "react";
import { View, Image, TouchableOpacity, StatusBar, Text, Modal } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native'; // Import the hooks

import styles from './header.style';
import { set } from "firebase/database";

function Header({ screenName }) {
  const navigation = useNavigation(); // Use the hook to get navigation object
  const isFocused = useIsFocused(); // Use the hook to determine if the screen is focused
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

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

  return (
    <View>
      <StatusBar backgroundColor={"#A4E7DD"} />
      <View style={styles.topScreenContainer}><Image style={styles.headerImg} source={require('../../assets/General/Header.png')} /></View>
      <View style={styles.header}>
        {isFocused && navigation.canGoBack() && ( // Only render the back button if the screen is focused and there is a screen to go back to
          <TouchableOpacity style={styles.headerButton} onPress={() => goBack(screenName)} >
            <Image style={styles.headerButtonImg} source={require('../../assets/General/Back.png')} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.headerLogo}>
          <Image style={styles.headerLogoImg} source={require('../../assets/General/Share.png')} />
        </TouchableOpacity>
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
