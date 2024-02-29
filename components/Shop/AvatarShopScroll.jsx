import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text, ImageBackground,Modal } from 'react-native';

import Avatar from '../Avatar/Avatar';
import dbConnectionShop from '../DataBase/dbConnectionShop';
import styles from './AvatarShopScroll.style';

const AvatarItemScroll = ({
  userId,
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
  const [showModal, setShowModal] = useState(false);
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
    // setHairStyle(itemValue);
    setShowModal(true);
    
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

  const { shopItems } = dbConnectionShop();
  return (
    <View style={styles.formContainer}>
      {showLoading && (
        <View style={styles.loading}>
          <Image style={{ width: 100, height: 100 }} source={require('../../assets/Avatar-Shop/loading.gif')} />
        </View>
      )}
      {showHairStylePage && (<ScrollView style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}>
        <View>
          {shopItems && shopItems.Top && shopItems.Top.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
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
                  }}
                    points={item.points}
                  />
                  <Text style={styles.points}>{item.points}P</Text>
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
          {shopItems && shopItems.HairColor && shopItems.HairColor.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
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
                  }}
                    points={item.points}
                  />
                  <Text style={styles.points}>{item.points}P</Text>
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
          {shopItems && shopItems.SkinColor && shopItems.SkinColor.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
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
                  }}
                    points={item.points}
                  />
                  <Text style={styles.points}>{item.points}P</Text>
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
          {shopItems && shopItems.Eyes && shopItems.Eyes.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
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
                  }}
                    points={item.points}
                  />
                  <Text style={styles.points}>{item.points}P</Text>
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
          {shopItems && shopItems.Eyebrows && shopItems.Eyebrows.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
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
                  }}
                    points={item.points}
                  />
                  <Text style={styles.points}>{item.points}P</Text>
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
          {shopItems && shopItems.Mouth && shopItems.Mouth.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
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
                  }}
                    points={item.points}
                  />
                  <Text style={styles.points}>{item.points}P</Text>
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
          {shopItems && shopItems.ClothingColor && shopItems.ClothingColor.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
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
                  }}
                    points={item.points}
                  />
                  <Text style={styles.points}>{item.points}P</Text>
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
          {shopItems && shopItems.Clothing && shopItems.Clothing.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
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
                  }}
                    points={item.points}
                  />
                  <Text style={styles.points}>{item.points}P</Text>
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
          <Image style={styles.stylePickerImg} source={require('../../assets/Avatar-Shop/hairStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Hair Color'] }]}
          onPress={() => handlePage('Hair Color')}>
          <Image style={styles.stylePickerImg} source={require('../../assets/Avatar-Shop/hairColorStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Mouth'] }]}
          onPress={() => handlePage('Mouth')}>
          <Image style={styles.stylePickerImg} source={require('../../assets/Avatar-Shop/mouthStyle.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Eyes'] }]}
          onPress={() => handlePage('Eyes')}>
          <Image style={styles.stylePickerImg} source={require('../../assets/Avatar-Shop/eyesStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Eyes Brows'] }]}
          onPress={() => handlePage('Eyes Brows')}>
          <Image style={styles.stylePickerImg} source={require('../../assets/Avatar-Shop/eyesBrowsStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Skin Color'] }]}
          onPress={() => handlePage('Skin Color')}>
          <Image style={styles.stylePickerImg} source={require('../../assets/Avatar-Shop/skinColorStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['Clothes'] }]}
          onPress={() => handlePage('Clothes')}>
          <Image style={styles.stylePickerImg} source={require('../../assets/Avatar-Shop/clothingStyle.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.stylePicker, { backgroundColor: buttonColor['ClothesColor'] }]}
          onPress={() => handlePage('ClothesColor')}>
          <Image style={styles.stylePickerImg} source={require('../../assets/Avatar-Shop/clothingColorStyle.png')} />
        </TouchableOpacity>
      </View>
      )}
        <View>
    <Modal
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
      animationType="slide"
      transparent={true}
      >
      <View style={styles.modalContainer}>
        <Text>Do you want to purchase ?</Text>
        <View style={styles.modalButtons}>
          <TouchableOpacity >
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowModal(false)} >
            <Text>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>
    </View>
  
  );
};

export default AvatarItemScroll;
