import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './footer.style';

function Footer() {
  return (
    <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton}>
          <Image style={styles.footerImg} source={require('../../assets/General/Plus.png')} />
        </TouchableOpacity>
        <Image style={styles.footerImage} source={require('../../assets/General/Footer.png')}>
        </Image>
        <View style={styles.footerIcons}>
          <TouchableOpacity><Image style={styles.footerIcon} source={require('../../assets/General/Home.png')} /></TouchableOpacity>
          <TouchableOpacity><Image style={styles.footerIcon} source={require('../../assets/General/Achievements.png')} /></TouchableOpacity>
          <View style={styles.seperator} />
          <TouchableOpacity><Image style={styles.footerIcon} source={require('../../assets/General/Shop.png')} /></TouchableOpacity>
          <TouchableOpacity><Image style={styles.selectedFooterIcon} source={require('../../assets/General/Profile.png')} /></TouchableOpacity>
        </View>
    </View>
  );
}

export default Footer;
