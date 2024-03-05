// AvatarCreationForm
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { I18nManager } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import AvatarCreation from '../Avatar/AvatarCreation';
import AvatarShopScroll from './AvatarShopScroll';
import styles from './ShopCreation.style';
import dbConnectionUsers from '../DataBase/dbConnectionUsers';

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
  const [score, setScore] = useState(0);
  const { users, getUserById } = dbConnectionUsers();

  useEffect(() => {
    if (users) {
      const user = getUserById(userId);
      if (user) {
        setScore(user.Points);
      }
    }
  }, [users]);

  useEffect(() => {
  }, [score]);

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.titleContainer}>
        <Image source={require('../../assets/Avatar-Shop/confetti2.png')} />
        <Text style={styles.titleText}>Shop</Text>
        <Image source={require('../../assets/Avatar-Shop/confetti1.png')} />
      </View>
      <Text>{score}</Text>
      <Image style={styles.pointImage} source={require('../../assets/Avatar-Shop/star.png')} />
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
        hairColor={hairColor}
        mouthStyle={mouthStyle}
        clothingColorStyle={clothingColorStyle}
        eyesStyle={eyesStyle}
        eyesBrowsStyle={eyesBrowsStyle}
        skinColorStyle={skinColorStyle}
        clothingStyle={clothingStyle}
        showAvatar={showAvatar}
      />
    </View>

  );
};

export default ShopCreation;
