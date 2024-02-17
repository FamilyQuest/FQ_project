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
  const [hairStyle, setHairStyle] = useState('short01');
  const [hairColor, setHairColor] = useState('000000');
  const [mouthStyle, setMouthStyle] = useState('variant01');
  const [glassesStyle, setGlassesStyle] = useState('');
  const [eyesStyle, setEyesStyle] = useState('variant01');
  const [eyesBrowsStyle, setEyesBrowsStyle] = useState('variant02');
  const [skinColorStyle, setSkinColorStyle] = useState('f2d3b1');
  const [earringsStyle, setEarringsStyle] = useState('');
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
            hair: [hairStyle],
            hairColor: [hairColor],
            mouth: [mouthStyle],
            skinColor: [skinColorStyle],
            glasses: [glassesStyle],
            glassesProbability: 100,
            eyes: [eyesStyle],
            eyebrows: [eyesBrowsStyle],
            earringsProbability: 100,
            earrings: [earringsStyle],
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
        glassesStyle={glassesStyle}
        setGlassesStyle={setGlassesStyle}
        eyesStyle={eyesStyle}
        setEyesStyle={setEyesStyle}
        eyesBrowsStyle={eyesBrowsStyle}
        setEyesBrowsStyle={setEyesBrowsStyle}
        skinColorStyle={skinColorStyle}
        setSkinColorStyle={setSkinColorStyle}
        earringsStyle={earringsStyle}
        setEarringsStyle={setEarringsStyle}
        showAvatar={showAvatar}
        setShowAvatar={setShowAvatar}
      />
      <Footer/>
    </ImageBackground>

  );
};

export default AvatarCreationForm;
