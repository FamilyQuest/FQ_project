import React, { useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text, ImageBackground } from 'react-native';

import Avatar from './Avatar';
import styles from './avatarItemScroll.style';

const AvatarItemScroll = ({
  hairStyle,
  setHairStyle,
  hairColor,
  setHairColor,
  mouthStyle,
  setMouthStyle,
  clothingColorStyle,
  setClothingColorStyle,
  eyesStyle,
  setEyesStyle,
  eyesBrowsStyle,
  setEyesBrowsStyle,
  skinColorStyle,
  setSkinColorStyle,
  clothingStyle,
  setClothingStyle,
  showAvatar,
  setShowAvatar,
}) => {
  const [showHairStylePage, setShowHairStylePage] = useState(true);
  const [showHairColorStylePage, setShowHairColorStylePage] = useState(false);
  const [showMouthStylePage, setShowMouthStylePage] = useState(false);
  const [showClothingColorStylePage, setShowClothingColorStylePage] = useState(false);
  const [showEyesStylePage, setShowEyesStylePage] = useState(false);
  const [showEyesBrowsStylePage, setShowEyesBrowsStylePage] = useState(false);
  const [showSkinColorStylePage, setShowSkinColorStylePage] = useState(false);
  const [showClothingStylePage, setShowClothingStylePage] = useState(false);
  const [showPages, setShowPages] = useState(true);
  const [showLoading, setShowLoading] = useState(false);

  const [buttonColor, setButtonColor] = useState({
    'Hair Style': '#FF6E6B',
    'Hair Color': '#D9D9D9',
    'Skin Color': '#D9D9D9',
    'Eyes': '#D9D9D9',
    'Eyes Brows': '#D9D9D9',
    'Mouth': '#D9D9D9',
    'ClothesColor': '#D9D9D9',
    'Clothes': '#D9D9D9',
  });

  const resetPages = () => {
    setShowPages(false);
    if (showHairStylePage) {
      setShowHairStylePage(false);
      buttonColor['Hair Style'] = '#D9D9D9';
    }
    if (showHairColorStylePage) {
      setShowHairColorStylePage(false);
      buttonColor['Hair Color'] = '#D9D9D9';
    }
    if (showMouthStylePage) {
      setShowMouthStylePage(false);
      buttonColor['Mouth'] = '#D9D9D9';
    }
    if (showClothingColorStylePage) {
      setShowClothingColorStylePage(false);
      buttonColor['ClothesColor'] = '#D9D9D9';
    }
    if (showEyesStylePage) {
      setShowEyesStylePage(false);
      buttonColor['Eyes'] = '#D9D9D9';
    }
    if (showEyesBrowsStylePage) {
      setShowEyesBrowsStylePage(false);
      buttonColor['Eyes Brows'] = '#D9D9D9';
    }
    if (showSkinColorStylePage) {
      setShowSkinColorStylePage(false);
      buttonColor['Skin Color'] = '#D9D9D9';
    }
    if (showClothingStylePage) {
      setShowClothingStylePage(false);
      buttonColor['Clothes'] = '#D9D9D9';
    }
  };

  const handlePage = async (pageName) => {
    setShowLoading(true);
    resetPages();

    await new Promise((resolve) => setTimeout(resolve, 1000));
    buttonColor[pageName] = '#FF6E6B';
    switch (pageName) {
      case 'Hair Style':
        setShowHairStylePage(true);
        break;
      case 'Hair Color':
        setShowHairColorStylePage(true);
        break;
      case 'Skin Color':
        setShowSkinColorStylePage(true);
        break;
      case 'Eyes':
        setShowEyesStylePage(true);
        break;
      case 'Eyes Brows':
        setShowEyesBrowsStylePage(true);
        break;
      case 'Mouth':
        setShowMouthStylePage(true);
        break;
      case 'ClothesColor':
        setShowClothingColorStylePage(true);
        break;
      case 'Clothes':
        setShowClothingStylePage(true);
        break;
      default:
        break;
    }
    setShowLoading(false);
    setShowPages(true);
  };


  const handleHairStyleChange = (itemValue) => {
    setHairStyle(itemValue);
  };

  const handleMouthStyleChange = (itemValue) => {
    setMouthStyle(itemValue);
  };

  const handleHairColorStyleChange = (itemValue) => {
    setHairColor(itemValue);
  };

  const handleSkinColorStyleChange = (itemValue) => {
    setSkinColorStyle(itemValue);
  };

  const handleClothingColorStyleChange = (itemValue) => {
    setClothingColorStyle(itemValue);
  };

  const handleEyesStyleChange = (itemValue) => {
    setEyesStyle(itemValue);
  };

  const handleEyesBrowsStyleChange = (itemValue) => {
    setEyesBrowsStyle(itemValue);
  };

  const handleClothesStyleChange = (itemValue) => {
    setClothingStyle(itemValue);
  };

  dataJson = {
    'Top': [
      { 'id': 1, 'name': 'bigHair' },
      { 'id': 2, 'name': 'bob' },
      { 'id': 3, 'name': 'bun' },
      { 'id': 4, 'name': 'curly' },
      { 'id': 5, 'name': 'curvy' },
      { 'id': 6, 'name': 'dreads' },
      { 'id': 7, 'name': 'dreads01' },
      { 'id': 8, 'name': 'dreads02' },
      { 'id': 9, 'name': 'frida' },
      { 'id': 10, 'name': 'frizzle' },
      { 'id': 11, 'name': 'fro' },
      { 'id': 12, 'name': 'froBand' },
      { 'id': 13, 'name': 'hat' },
      { 'id': 14, 'name': 'longButNotTooLong' },
      { 'id': 15, 'name': 'miaWallace' },
      { 'id': 16, 'name': 'shaggy' },
      { 'id': 17, 'name': 'shaggyMullet' },
      { 'id': 18, 'name': 'shavedSides' },
      { 'id': 19, 'name': 'shortCurly' },
      { 'id': 20, 'name': 'shortFlat' },
      { 'id': 21, 'name': 'shortRound' },
      { 'id': 22, 'name': 'shortWaved' },
      { 'id': 23, 'name': 'sides' },
      { 'id': 24, 'name': 'straight01' },
      { 'id': 25, 'name': 'straight02' },
      { 'id': 26, 'name': 'straightAndStrand' },
      { 'id': 27, 'name': 'theCaesar' },
      { 'id': 28, 'name': 'theCaesarAndSidePart' },
      { 'id': 29, 'name': 'turban' },
      { 'id': 30, 'name': 'winterHat1' },
      { 'id': 31, 'name': 'winterHat02' },
      { 'id': 32, 'name': 'winterHat03' },
      { 'id': 33, 'name': 'winterHat04' }
    ],
    'HairColor': [
      { 'id': 1, 'name': '0e0e0e' },
      { 'id': 2, 'name': '3eac2c' },
      { 'id': 3, 'name': '6a4e35' },
      { 'id': 4, 'name': '85c2c6' },
      { 'id': 5, 'name': '796a45' },
      { 'id': 6, 'name': '562306' },
      { 'id': 7, 'name': '592454' },
      { 'id': 8, 'name': 'ab2a18' },
      { 'id': 9, 'name': 'ac6511' },
      { 'id': 10, 'name': 'afafaf' },
      { 'id': 11, 'name': 'b9a05f' },
      { 'id': 12, 'name': 'cb6820' },
      { 'id': 13, 'name': 'dba3be' },
      { 'id': 14, 'name': 'e5d7a3' },
      { 'id': 15, 'name': 'ffffff' }
    ],
    'SkinColor': [
      { 'id': 1, 'name': '614335' },
      { 'id': 2, 'name': 'ae5d29' },
      { 'id': 3, 'name': 'd08b5b' },
      { 'id': 4, 'name': 'edb98a' },
      { 'id': 5, 'name': 'f8d25c' },
      { 'id': 6, 'name': 'fd9841' },
      { 'id': 7, 'name': 'ffdbb4' }
    ],
    'Mouth': [
      { 'id': 1, 'name': 'concerned' },
      { 'id': 2, 'name': 'default' },
      { 'id': 3, 'name': 'disbelief' },
      { 'id': 4, 'name': 'eating' },
      { 'id': 5, 'name': 'grimace' },
      { 'id': 6, 'name': 'sad' },
      { 'id': 7, 'name': 'screamOpen' },
      { 'id': 8, 'name': 'serious' },
      { 'id': 9, 'name': 'smile' },
      { 'id': 10, 'name': 'tongue' },
      { 'id': 11, 'name': 'twinkle' },
      { 'id': 12, 'name': 'vomit' }
    ],
    'Eyes': [
      { 'id': 1, 'name': 'closed' },
      { 'id': 2, 'name': 'cry' },
      { 'id': 3, 'name': 'default' },
      { 'id': 4, 'name': 'eyeRoll' },
      { 'id': 5, 'name': 'happy' },
      { 'id': 6, 'name': 'hearts' },
      { 'id': 7, 'name': 'side' },
      { 'id': 8, 'name': 'squint' },
      { 'id': 9, 'name': 'surprised' },
      { 'id': 10, 'name': 'wink' },
      { 'id': 11, 'name': 'winkWacky' },
      { 'id': 12, 'name': 'xDizzy' }
    ],
    'Eyebrows': [
      { 'id': 1, 'name': 'angry' },
      { 'id': 2, 'name': 'angryNatural' },
      { 'id': 3, 'name': 'default' },
      { 'id': 4, 'name': 'defaultNatural' },
      { 'id': 5, 'name': 'flatNatural' },
      { 'id': 6, 'name': 'frownNatural' },
      { 'id': 7, 'name': 'raisedExcited' },
      { 'id': 8, 'name': 'raisedExcitedNatural' },
      { 'id': 9, 'name': 'sadConcerned' },
      { 'id': 10, 'name': 'sadConcernedNatural' },
      { 'id': 11, 'name': 'unibrowNatural' },
      { 'id': 12, 'name': 'upDown' },
      { 'id': 13, 'name': 'upDownNatural' }
    ],
    'Clothing': [
      { 'id': 1, 'name': 'blazerAndShirt' },
      { 'id': 2, 'name': 'blazerAndSweater' },
      { 'id': 3, 'name': 'collarAndSweater' },
      { 'id': 4, 'name': 'graphicShirt' },
      { 'id': 5, 'name': 'hoodie' },
      { 'id': 6, 'name': 'overall' },
      { 'id': 7, 'name': 'shirtCrewNeck' },
      { 'id': 8, 'name': 'shirtScoopNeck' },
      { 'id': 9, 'name': 'shirtVNeck' }
    ],
    'ClothingColor': [
      { 'id': 1, 'name': '3c4f5c' },
      { 'id': 2, 'name': '65c9ff' },
      { 'id': 3, 'name': '262e33' },
      { 'id': 4, 'name': '5199e4' },
      { 'id': 5, 'name': '25557c' },
      { 'id': 6, 'name': '929598' },
      { 'id': 7, 'name': 'a7ffc4' },
      { 'id': 8, 'name': 'b1e2ff' },
      { 'id': 9, 'name': 'e6e6e6' },
      { 'id': 10, 'name': 'ff5c5c' },
      { 'id': 11, 'name': 'ff488e' },
      { 'id': 12, 'name': 'ffafb9' },
      { 'id': 13, 'name': 'ffffb1' },
      { 'id': 14, 'name': 'ffffff' }
    ]
  }


  return (
    <View style={styles.formContainer}>
      {showLoading && (
        <View style={styles.loading}>
          <Image style={{ width: 100, height: 100 }} source={require('../assets/Avatar-Shop/loading.gif')} />
        </View>
      )}
      {showHairStylePage && (<ScrollView style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}>
        <View>
          {dataJson.Top.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
            <View key={index} style={styles.rowContainer}>
              {row.map((item, index) => (
                <TouchableOpacity key={index} style={styles.item} onPress={() => handleHairStyleChange(item.name)}>
                  <Avatar params={{
                    top: [item.name],
                    hairColor: [hairColor],
                    skinColor: [skinColorStyle],
                    clothing: [clothingStyle],
                    clothesColor: [clothingColorStyle],
                    mouth: [],
                    eyes: [],
                    eyebrows: [],
                  }} />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>



      </ScrollView>

      )}
      {showHairColorStylePage && (<ScrollView style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}>

        <View>
          {dataJson.HairColor.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
            <View key={index} style={styles.rowContainer}>
              {row.map((item, index) => (
                <TouchableOpacity key={index} style={styles.item} onPress={() => handleHairColorStyleChange(item.name)}>
                  <Avatar params={{
                    top: [hairStyle],
                    hairColor: [item.name],
                    skinColor: [skinColorStyle],
                    clothing: [clothingStyle],
                    clothesColor: [clothingColorStyle],
                    mouth: [],
                    eyes: [],
                    eyebrows: [],
                  }} />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      )}
      {showSkinColorStylePage && (<ScrollView style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}>


        <View>
          {dataJson.SkinColor.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
            <View key={index} style={styles.rowContainer}>
              {row.map((item, index) => (
                <TouchableOpacity key={index} style={styles.item} onPress={() => handleSkinColorStyleChange(item.name)}>
                  <Avatar params={{
                    top: [hairStyle],
                    hairColor: [hairColor],
                    skinColor: [item.name],
                    clothing: [clothingStyle],
                    clothesColor: [clothingColorStyle],
                    mouth: [],
                    eyes: [],
                    eyebrows: [],
                  }} />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

      </ScrollView>
      )}
      {showEyesStylePage && (<ScrollView style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}>

        <View>
          {dataJson.Eyes.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
            <View key={index} style={styles.rowContainer}>
              {row.map((item, index) => (
                <TouchableOpacity key={index} style={styles.item} onPress={() => handleEyesStyleChange(item.name)}>
                  <Avatar params={{
                    top: [hairStyle],
                    hairColor: [hairColor],
                    skinColor: [skinColorStyle],
                    clothing: [clothingStyle],
                    clothesColor: [clothingColorStyle],
                    mouth: [],
                    eyes: [item.name],
                    eyebrows: [],
                  }} />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

      </ScrollView>

      )}
      {showEyesBrowsStylePage && (<ScrollView style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}>
                <View>
          {dataJson.Eyebrows.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
            <View key={index} style={styles.rowContainer}>
              {row.map((item, index) => (
                <TouchableOpacity key={index} style={styles.item} onPress={() => handleEyesBrowsStyleChange(item.name)}>
                  <Avatar params={{
                    top: [hairStyle],
                    hairColor: [hairColor],
                    skinColor: [skinColorStyle],
                    clothing: [clothingStyle],
                    clothesColor: [clothingColorStyle],
                    mouth: [],
                    eyes: [],
                    eyebrows: [item.name],
                  }} />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      )}
      {showMouthStylePage && (<ScrollView style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}>
        <View>
          {dataJson.Mouth.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
            <View key={index} style={styles.rowContainer}>
              {row.map((item, index) => (
                <TouchableOpacity key={index} style={styles.item} onPress={() => handleMouthStyleChange(item.name)}>
                  <Avatar params={{
                    top: [hairStyle],
                    hairColor: [hairColor],
                    skinColor: [skinColorStyle],
                    mouth: [item.name],
                    clothing: [clothingStyle],
                    clothesColor: [clothingColorStyle],
                    eyes: [],
                    eyebrows: [],
                  }} />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      )}
      {showClothingColorStylePage && (<ScrollView style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}>
        <View>
          {dataJson.ClothingColor.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
            <View key={index} style={styles.rowContainer}>
              {row.map((item, index) => (
                <TouchableOpacity key={index} style={styles.item} onPress={() => handleClothingColorStyleChange(item.name)}>
                  <Avatar params={{
                    top: [hairStyle],
                    hairColor: [hairColor],
                    skinColor: [skinColorStyle],
                    mouth: [],
                    clothing: [clothingStyle],
                    clothesColor: [item.name],
                    eyes: [],
                    eyebrows: [],
                  }} />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      )}
      {showClothingStylePage && (<ScrollView style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}>
        <View>
          {dataJson.Clothing.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
            <View key={index} style={styles.rowContainer}>
              {row.map((item, index) => (
                <TouchableOpacity key={index} style={styles.item} onPress={() => handleClothesStyleChange(item.name)}>
                  <Avatar params={{
                    top: [hairStyle],
                    hairColor: [hairColor],
                    skinColor: [skinColorStyle],
                    clothing: [item.name],
                    clothesColor: [clothingColorStyle],
                    mouth: [],
                    eyes: [],
                    eyebrows: [],
                  }} />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      )}
      {showPages && (<View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Hair Style'] }]}
          onPress={() => handlePage('Hair Style')}>
          <Image style={styles.stylePickerImg} source={require('../assets/Avatar-Shop/hairStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Hair Color'] }]}
          onPress={() => handlePage('Hair Color')}>
          <Image style={styles.stylePickerImg} source={require('../assets/Avatar-Shop/hairColorStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Mouth'] }]}
          onPress={() => handlePage('Mouth')}>
          <Image style={styles.stylePickerImg} source={require('../assets/Avatar-Shop/mouthStyle.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Eyes'] }]}
          onPress={() => handlePage('Eyes')}>
          <Image style={styles.stylePickerImg} source={require('../assets/Avatar-Shop/eyesStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Eyes Brows'] }]}
          onPress={() => handlePage('Eyes Brows')}>
          <Image style={styles.stylePickerImg} source={require('../assets/Avatar-Shop/eyesBrowsStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Skin Color'] }]}
          onPress={() => handlePage('Skin Color')}>
          <Image style={styles.stylePickerImg} source={require('../assets/Avatar-Shop/skinColorStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Clothes'] }]}
          onPress={() => handlePage('Clothes')}>
          <Image style={styles.stylePickerImg} source={require('../assets/Avatar-Shop/clothingStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['ClothesColor'] }]}
          onPress={() => handlePage('ClothesColor')}>
          <Image style={styles.stylePickerImg} source={require('../assets/Avatar-Shop/clothingColorStyle.png')} />
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
};

export default AvatarItemScroll;
