import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './footer.style';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

function Footer({ userId, navigation, screenName, userType }) {
  // Initialize state based on props
  const [showPlus, setShowPlus] = useState(userType === 'admin');

  useEffect(() => {
    // Update showPlus state based on userType prop changes
    setShowPlus(userType === 'admin');
  }, [userType]);

  let opc1 = 0.5, opc2 = 0.5, opc3 = 0.5, opc4 = 0.5;

  switch (screenName) {
    case "Home":
      opc1 = 1, opc2 = 0.5, opc3 = 0.5, opc4 = 0.5;
      break;
    case "Achievements":
      opc1 = 0.5, opc2 = 1, opc3 = 0.5, opc4 = 0.5;
      break;
    case "Shop":
      opc1 = 0.5, opc2 = 0.5, opc3 = 1, opc4 = 0.5;
      break;
    case "Avatar":
      opc1 = 0.5, opc2 = 0.5, opc3 = 0.5, opc4 = 1;
      break;
  }

  function CreateTask() {
    console.log("Footer id ", userId);
    navigation.navigate("SubmitTask", { userId: userId, userType: userType })
  }

  let footerUrl;
  if (userType == 'child') {
    footerUrl = require('../../assets/General/Footer_v2.png');
  } else {
    footerUrl = require('../../assets/General/Footer.png');
  }

  return (
    <View style={styles.footer}>
      {showPlus && (
        <TouchableOpacity style={styles.createButton} onPress={() => CreateTask()}>
          <Image style={styles.footerImg} source={require('../../assets/General/Plus.png')} />
        </TouchableOpacity>
      )}
      <Image style={styles.footerImage} source={footerUrl} />
      <View style={styles.footerIcons}>
        <TouchableOpacity onPress={() => navigation.navigate("Home", { userId: userId, userType: userType })}>
          <Image style={[styles.footerIcon, { opacity: opc1 }]} source={require('../../assets/General/Home.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Achievements", { userId: userId, userType: userType })}>
          <Image style={[styles.footerIcon, { opacity: opc2 }]} source={require('../../assets/General/Achievements.png')} />
        </TouchableOpacity>
        <View style={styles.seperator} />
        <TouchableOpacity onPress={() => navigation.navigate("Shop", { userId: userId, userType: userType })}>
          <Image style={[styles.footerIcon, { opacity: opc3 }]} source={require('../../assets/General/Shop.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Avatar", { userId: userId, userType: userType })}>
          <Image style={[styles.footerIcon, { opacity: opc4 }]} source={require('../../assets/General/Profile.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Footer;
