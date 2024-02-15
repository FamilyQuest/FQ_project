// AvatarCreationForm
import React, { useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import AvatarCreation from './AvatarCreation';
import AvatarItemScroll from './AvatarItemScroll';
import styles from './avatarCreationForm.style';
import { StatusBar } from 'expo-status-bar';

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
      <View style={styles.topScreenContainer}><Image style={{ resizeMode: "cover", width: "100%" }} source={require('../assets/General/Header.png')} /></View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={() => { }}>
          <Image style={styles.headerButtonImg} source={require('../assets/General/Back.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerLogo} onPress={() => { }}>
          <Image style={styles.headerLogoImg} source={require('../assets/General/Share.png')} />
        </TouchableOpacity>
      </View>
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
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton}>
          <Image style={{ width: 30, height: 30, }} source={require('../assets/General/Plus.png')} />
        </TouchableOpacity>
        <Image style={styles.footerImage} source={require('../assets/General/Footer.png')}>

        </Image>
        <View style={styles.footerIcons}>
          <TouchableOpacity><Image style={styles.footerIcon} source={require('../assets/General/Home.png')} /></TouchableOpacity>
          <TouchableOpacity><Image style={styles.footerIcon} source={require('../assets/General/Achievements.png')} /></TouchableOpacity>
          <View style={styles.sperator} />
          <TouchableOpacity><Image style={styles.footerIcon} source={require('../assets/General/Shop.png')} /></TouchableOpacity>
          <TouchableOpacity><Image style={styles.selectedFooterIcon} source={require('../assets/General/Profile.png')} /></TouchableOpacity>
        </View>
      </View>
    </ImageBackground>

  );
};

export default AvatarCreationForm;
