import React from 'react';
import { View, Image, TouchableOpacity,StatusBar } from 'react-native';

import styles from './header.style';

function Header() {
  return (
    <View>
        <StatusBar backgroundColor={"#A4E7DD"} />
        <View style={styles.topScreenContainer}><Image style={styles.headerImg} source={require('../../assets/General/Header.png')} /></View>
    </View>
  );
}

export default Header;
