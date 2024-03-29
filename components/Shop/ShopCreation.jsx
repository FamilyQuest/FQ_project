import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { I18nManager } from "react-native";
import AvatarShopScroll from './AvatarShopScroll';
import PhysicalShopScroll from './PhysicalShopScroll'; 
import styles from './ShopCreation.style';
import dbConnectionUsers from '../DataBase/dbConnectionUsers';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

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
  const [shopType, setShopType] = useState('virtual'); 
  const [virtualBtnColor, setVirtualBtnColor] = useState('#8DE1D5');
  const [physicalBtnColor, setPhysicalBtnColor] = useState('#DAF4F0');

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

  const handleVirtualPress = () => {
    setShopType('virtual'); 
    setVirtualBtnColor('#8DE1D5'); 
    setPhysicalBtnColor('#DAF4F0'); 
  };

  const handlePhysicalPress = () => {
    setShopType('physical'); 
    setVirtualBtnColor('#DAF4F0'); 
    setPhysicalBtnColor('#8DE1D5'); 
  };

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
        <TouchableOpacity style={[styles.Btn1, { backgroundColor: virtualBtnColor }]} onPress={handleVirtualPress}>
          <Text style={styles.textBtn}>Virtual</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn2, { backgroundColor: physicalBtnColor }]} onPress={handlePhysicalPress}>
          <Text style={styles.textBtn}>Physical</Text>
        </TouchableOpacity>
      </View>
      {shopType === 'virtual' ? (
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
      ) : (
        <PhysicalShopScroll
        userId={userId}
        />
      )}
    </View>
  );
};

export default ShopCreation;
