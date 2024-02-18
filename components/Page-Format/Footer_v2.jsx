import React from 'react';
import { View, Image } from 'react-native';
import styles from './footer_v2.style';

function Footer_v2() {
  return (
    <View style={styles.footer}>
      <Image
        style={styles.footerImage}
        source={require('../../assets/General/Footer_v2.png')}
      />
    </View>
  );
}

export default Footer_v2;