import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { I18nManager } from "react-native";
import dbConnectionAvatars from '../DataBase/dbConnectionAvatars';
import dbConnectionUsers from '../DataBase/dbConnectionUsers';
import AvatarCreation from './AvatarCreation';
import AvatarItemScroll from './AvatarItemScroll';
import styles from './avatarCreationForm.style';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

const AvatarCreationForm = ({ userId, navigation }) => {
  const { avatars, getAvatarById, updateAvatarByUserId } = dbConnectionAvatars();
  const { users, getUserById } = dbConnectionUsers();

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (users) {
      const user = getUserById(userId);
      if (user) {
        setName(user.first_name + ' ' + user.last_name);
        setAge(user.age);
        setScore(user.Points);
      }
    }
  }, [users]);

    const [avatar, setAvatar] = useState(null);
    const [loading, setLoading] = useState(false);

    const [hairStyle, setHairStyle] = useState('shortFlat');
    const [hairColor, setHairColor] = useState('000000');
    const [mouthStyle, setMouthStyle] = useState('default');
    const [clothingColorStyle, setClothingColorStyle] = useState('3c4f5c');
    const [eyesStyle, setEyesStyle] = useState('default');
    const [eyesBrowsStyle, setEyesBrowsStyle] = useState('default');
    const [skinColorStyle, setSkinColorStyle] = useState('f2d3b1');
    const [clothingStyle, setClothingStyle] = useState('hoodie');

    useEffect(() => {
      if (avatars) {
        const foundAvatar = getAvatarById(userId);
        setAvatar(foundAvatar);
        setLoading(true);
      }
    }, [avatars]);

    useEffect(() => {
      if (avatar) {
        setHairStyle(avatar['Top'] ?? 'shortFlat');
        setHairColor(avatar['HairColor'] ?? '000000');
        setMouthStyle(avatar['Mouth'] ?? 'default');
        setClothingColorStyle(avatar['ClothingColor'] ?? '3c4f5c');
        setEyesStyle(avatar['Eyes'] ?? 'default');
        setEyesBrowsStyle(avatar['Eyebrows'] ?? 'default');
        setSkinColorStyle(avatar['SkinColor'] ?? 'f2d3b1');
        setClothingStyle(avatar['Clothing'] ?? 'hoodie');
      }
    }, [avatar]);

    useEffect(() => {
      if (avatar) {
        updateAvatarByUserId(userId, {
          user_id: userId,
          Top: hairStyle,
          HairColor: hairColor,
          Mouth: mouthStyle,
          ClothingColor: clothingColorStyle,
          Eyes: eyesStyle,
          Eyebrows: eyesBrowsStyle,
          SkinColor: skinColorStyle,
          Clothing: clothingStyle,
        });
      }
    }, [avatar, hairStyle, hairColor, mouthStyle, clothingColorStyle, eyesStyle, eyesBrowsStyle, skinColorStyle, clothingStyle]);

    return (
      <View style={{ alignItems: 'center' }}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>customization</Text>
        </View>
        {!loading && !avatar ? (
          <ActivityIndicator style={{ marginBottom: 100 }} size="large" color="#FF6E6B" />
        ) : (
          <>
            {loading && avatar && (
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
                name={name}
                age={age}
                score={score}
              />
            )}
            {loading && (
              <AvatarItemScroll
                userId={userId}
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
                showAvatar={!!avatar}
                setShowAvatar={setAvatar}
              />
            )}
          </>
        )}
      </View>
    );
  };

  export default AvatarCreationForm;
