import React from 'react';
import { View, Image } from 'react-native';
import styles from './footer_v2.style';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

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