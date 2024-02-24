// AvatarCreationForm
import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import AvatarCreation from './AvatarCreation';
import AvatarItemScroll from './AvatarItemScroll';
import styles from './avatarCreationForm.style';
import Header from './Page-Format/Header';
import Footer from './Page-Format/Footer';

const AvatarCreationForm = () => {
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
    <ImageBackground
      source={require('../assets/Backgrounds/bg1.png')}
      style={styles.scrollContainer}>
      <Header/>
      <View style={styles.titleContainer}>
            <Text style={styles.titleText}>customization</Text>
      </View>
      {showAvatar && (
        <AvatarCreation
          params={{
            top: [hairStyle],
            hairColor: [hairColor],
            mouth: [mouthStyle],
            skinColor: [skinColorStyle],
            eyes: [eyesStyle],
            eyebrows: [eyesBrowsStyle],
            clothing: [clothingStyle],
            clothesColor: [clothingColorStyle],
          }}
          name={"Eido Peretz"}
          age={11}
          score={1000}
        />
      )}
      <AvatarItemScroll
        hairStyle={hairStyle}
        setHairStyle={setHairStyle}
        hairColor={hairColor}
        setHairColor={setHairColor}
        mouthStyle={mouthStyle}
        setMouthStyle={setMouthStyle}
        clothingColorStyle={clothingColorStyle}
        setClothingColorStyle={setClothingColorStyle}
        eyesStyle={eyesStyle}
        setEyesStyle={setEyesStyle}
        eyesBrowsStyle={eyesBrowsStyle}
        setEyesBrowsStyle={setEyesBrowsStyle}
        skinColorStyle={skinColorStyle}
        setSkinColorStyle={setSkinColorStyle}
        clothingStyle={clothingStyle}
        setClothingStyle={setClothingStyle}
        showAvatar={showAvatar}
        setShowAvatar={setShowAvatar}
      />
      <Footer/>
    </ImageBackground>

  );
};

export default AvatarCreationForm;
