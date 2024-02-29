// AvatarCreationForm
import React, { useState } from 'react';
import { View, Text, ImageBackground, Image,TouchableOpacity } from 'react-native';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import AvatarCreation from '../Avatar/AvatarCreation';
// import AvatarItemScroll from '../Avatar/AvatarItemScroll';
import AvatarShopScroll from './AvatarShopScroll';
import styles from './ShopCreation.style';

const ShopCreation = ({ userId, navigation }) => {
  const [hairStyle, setHairStyle] = useState('shortFlat');
  const [hairColor, setHairColor] = useState('000000');
  const [mouthStyle, setMouthStyle] = useState('default');
  const [clothingColorStyle, setClothingColorStyle] = useState('3c4f5c');
  const [eyesStyle, setEyesStyle] = useState('default');
  const [eyesBrowsStyle, setEyesBrowsStyle] = useState('default');
  const [skinColorStyle, setSkinColorStyle] = useState('f2d3b1');
  const [clothingStyle, setClothingStyle] = useState('hoodie');

  const [showAvatar, setShowAvatar] = useState(true);

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.titleContainer}>
        {/* <Image source={require('../../assets/Avatar-Shop/confetti2.png')} /> */}
        <Text style={styles.titleText}>Shop</Text>
        {/* <Image source={require('../../assets/Avatar-Shop/confetti1.png')} /> */}
      </View>
      <View style={styles.currentPointsContainer}>
      {/* <Image style={styles.pointImage} source={require('../../assets/Home/Points.png')} /> */}
      <Text style={{fontWeight:'bold',}}></Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.Btn1}>
          <Text style={styles.textBtn}>Virtual</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn2}>
          <Text style={styles.textBtn}>Physical</Text>
        </TouchableOpacity>
      </View>
    
      <AvatarShopScroll
        userId={userId}
        hairStyle={hairStyle}
        // setHairStyle={setHairStyle}
        hairColor={hairColor}
        // setHairColor={setHairColor}
        mouthStyle={mouthStyle}
        // setMouthStyle={setMouthStyle}
        clothingColorStyle={clothingColorStyle}
        // setClothingColorStyle={setClothingColorStyle}
        eyesStyle={eyesStyle}
        // setEyesStyle={setEyesStyle}
        eyesBrowsStyle={eyesBrowsStyle}
        // setEyesBrowsStyle={setEyesBrowsStyle}
        skinColorStyle={skinColorStyle}
        // setSkinColorStyle={setSkinColorStyle}
        clothingStyle={clothingStyle}
        // setClothingStyle={setClothingStyle}
        showAvatar={showAvatar}
      // setShowAvatar={setShowAvatar}
      />
  
    </View>

  );
};

export default ShopCreation;
