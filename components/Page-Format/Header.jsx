import React from 'react';
import { View, Image, TouchableOpacity,StatusBar } from 'react-native';

import styles from './header.style';

function Header() {
  return (
    <View>
        <StatusBar backgroundColor={"#A4E7DD"} />
        <View style={styles.topScreenContainer}><Image style={styles.headerImg} source={require('../../assets/General/Header.png')} /></View>
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerButton} onPress={() => { }}>
            <Image style={styles.headerButtonImg} source={require('../../assets/General/Back.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerLogo} onPress={() => { }}>
            <Image style={styles.headerLogoImg} source={require('../../assets/General/Share.png')} />
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default Header;
