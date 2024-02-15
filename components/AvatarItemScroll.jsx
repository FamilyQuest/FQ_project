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
    glassesStyle,
    setGlassesStyle,
    eyesStyle,
    setEyesStyle,
    eyesBrowsStyle,
    setEyesBrowsStyle,
    skinColorStyle,
    setSkinColorStyle,
    earringsStyle,
    setEarringsStyle,
    showAvatar,
    setShowAvatar,
  }) => {
    const [showHairStylePage, setShowHairStylePage] = useState(true);
  const [showHairColorStylePage, setShowHairColorStylePage] = useState(false);
  const [showMouthStylePage, setShowMouthStylePage] = useState(false);
  const [showGlassesStylePage, setShowGlassesStylePage] = useState(false);
  const [showEyesStylePage, setShowEyesStylePage] = useState(false);
  const [showEyesBrowsStylePage, setShowEyesBrowsStylePage] = useState(false);
  const [showSkinColorStylePage, setShowSkinColorStylePage] = useState(false);
  const [showEarringsStylePage, setShowEarringsStylePage] = useState(false);
  const [showPages, setShowPages] = useState(true);
  const [showLoading, setShowLoading] = useState(false);

  const [buttonColor, setButtonColor] = useState({
    'Hair Style': '#FF6E6B',
    'Hair Color': '#D9D9D9',
    'Skin Color': '#D9D9D9',
    'Eyes': '#D9D9D9',
    'Eyes Brows': '#D9D9D9',
    'Mouth': '#D9D9D9',
    'Glasses': '#D9D9D9',
    'Earrings': '#D9D9D9',
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
    if (showGlassesStylePage) {
      setShowGlassesStylePage(false);
      buttonColor['Glasses'] = '#D9D9D9';
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
    if (showEarringsStylePage) {
      setShowEarringsStylePage(false);
      buttonColor['Earrings'] = '#D9D9D9';
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
      case 'Glasses':
        setShowGlassesStylePage(true);
        break;
      case 'Earrings':
        setShowEarringsStylePage(true);
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

  const handleGlassesStyleChange = (itemValue) => {
    setGlassesStyle(itemValue);
  };

  const handleEyesStyleChange = (itemValue) => {
    setEyesStyle(itemValue);
  };

  const handleEyesBrowsStyleChange = (itemValue) => {
    setEyesBrowsStyle(itemValue);
  };

  const handleEarringsStyleChange = (itemValue) => {
    setEarringsStyle(itemValue);
  };

  const handleSubmit = () => {
    setShowAvatar(true);
  };
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
          {[...Array(9)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {[...Array(3)].map((_, colIndex) => {
                const hairStyleNumber = rowIndex * 3 + colIndex + 1;
                const formattedHairStyle = String(hairStyleNumber).padStart(2, '0');

                return (
                  <TouchableOpacity key={colIndex} style={styles.item} onPress={() => handleHairStyleChange(`long${formattedHairStyle}`)}>
                    <Avatar params={{
                      hair: [`long${formattedHairStyle}`],
                      hairColor: [hairColor],
                      skinColor: [skinColorStyle],
                      mouth: [],
                      eyes: [],
                      eyebrows: [],
                    }} />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
          {[...Array(6)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {[...Array(3)].map((_, colIndex) => {
                const hairStyleNumber = rowIndex * 3 + colIndex + 1;
                const formattedHairStyle = String(hairStyleNumber).padStart(2, '0');

                return (
                  <TouchableOpacity key={colIndex} style={styles.item} onPress={() => handleHairStyleChange(`short${formattedHairStyle}`)}>
                    <Avatar params={{
                      hair: [`short${formattedHairStyle}`],
                      hairColor: [hairColor],
                      skinColor: [skinColorStyle],
                      mouth: [],
                      eyes: [],
                      eyebrows: [],
                    }} />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}

        </ScrollView>

        )}
        {showHairColorStylePage && (<ScrollView style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}>

          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`0e0e0e`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["0e0e0e"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`3eac2c`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["3eac2c"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`6a4e35`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["6a4e35"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`85c2c6`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["85c2c6"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`796a45`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["796a45"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`562306`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["562306"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`592454`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["592454"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`ab2a18`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["ab2a18"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`ac6511`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["ac6511"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`afafaf`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["afafaf"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`b9a05f`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["b9a05f"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`cb6820`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["cb6820"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`dba3be`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["dba3be"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`e5d7a3`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["e5d7a3"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleHairColorStyleChange(`ffffff`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: ["ffffff"],
                skinColor: [skinColorStyle],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        )}
        {showSkinColorStylePage && (<ScrollView style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}>


          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.item} onPress={() => handleSkinColorStyleChange(`9e5622`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: [hairColor],
                skinColor: ['9e5622'],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleSkinColorStyleChange(`763900`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: [hairColor],
                skinColor: ['763900'],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleSkinColorStyleChange(`ecad80`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: [hairColor],
                skinColor: ['ecad80'],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.item} onPress={() => handleSkinColorStyleChange(`9e5622`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: [hairColor],
                skinColor: ['9e5622'],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleSkinColorStyleChange(`ffceb4`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: [hairColor],
                skinColor: ['ffceb4'],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleSkinColorStyleChange(`4b3932`)}>
              <Avatar params={{
                hair: [hairStyle],
                hairColor: [hairColor],
                skinColor: ['4b3932'],
                mouth: [],
                eyes: [],
                eyebrows: [],
              }} />
            </TouchableOpacity>
          </View>

        </ScrollView>
        )}
        {showEyesStylePage && (<ScrollView style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}>
          {[...Array(8)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {[...Array(3)].map((_, colIndex) => {
                const eyeStyleNumber = rowIndex * 3 + colIndex + 1;
                const formattedEyeStyle = String(eyeStyleNumber).padStart(2, '0');

                return (
                  <TouchableOpacity key={colIndex} style={styles.item} onPress={() => handleEyesStyleChange(`variant${formattedEyeStyle}`)}>
                    <Avatar params={{
                      hair: [hairStyle],
                      hairColor: [hairColor],
                      skinColor: [skinColorStyle],
                      mouth: [],
                      eyes: [`variant${formattedEyeStyle}`],
                      eyebrows: [],
                    }} />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}


        </ScrollView>

        )}
        {showEyesBrowsStylePage && (<ScrollView style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}>
          {[...Array(5)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {[...Array(3)].map((_, colIndex) => {
                const eyeBrowsStyleNumber = rowIndex * 3 + colIndex + 1;
                const formattedEyeBrowsStyle = String(eyeBrowsStyleNumber).padStart(2, '0');

                return (
                  <TouchableOpacity key={colIndex} style={styles.item} onPress={() => handleEyesBrowsStyleChange(`variant${formattedEyeBrowsStyle}`)}>
                    <Avatar params={{
                      hair: [hairStyle],
                      hairColor: [hairColor],
                      skinColor: [skinColorStyle],
                      mouth: [],
                      eyes: [],
                      eyebrows: [`variant${formattedEyeBrowsStyle}`],
                    }} />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </ScrollView>
        )}
        {showMouthStylePage && (<ScrollView style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}>
          {[...Array(10)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {[...Array(3)].map((_, colIndex) => {
                const mouthStyleNumber = rowIndex * 3 + colIndex + 1;
                const formattedMouthStyle = String(mouthStyleNumber).padStart(2, '0');

                return (
                  <TouchableOpacity key={colIndex} style={styles.item} onPress={() => handleMouthStyleChange(`variant${formattedMouthStyle}`)}>
                    <Avatar params={{
                      hair: [hairStyle],
                      hairColor: [hairColor],
                      skinColor: [skinColorStyle],
                      mouth: [`variant${formattedMouthStyle}`],
                      eyes: [],
                      eyebrows: [],
                    }} />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </ScrollView>
        )}
        {showGlassesStylePage && (<ScrollView style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}>
          {[...Array(2)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {[...Array(3)].map((_, colIndex) => {
                const glassesStyleNumber = rowIndex * 3 + colIndex + 1;
                const formattedGlassesStyle = String(glassesStyleNumber).padStart(2, '0');

                return (
                  <TouchableOpacity key={colIndex} style={styles.item} onPress={() => handleGlassesStyleChange(`variant${formattedGlassesStyle}`)}>
                    <Avatar params={{
                      hair: [hairStyle],
                      hairColor: [hairColor],
                      skinColor: [skinColorStyle],
                      mouth: [],
                      eyes: [],
                      eyebrows: [],
                      glasses: [`variant${formattedGlassesStyle}`],
                      glassesProbability: 100,
                    }} />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </ScrollView>
        )}
        {showEarringsStylePage && (<ScrollView style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}>
          {[...Array(3)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.rowContainer}>
              {[...Array(3)].map((_, colIndex) => {
                const earringsStyleNumber = rowIndex * 3 + colIndex + 1;
                const formattedEarringsStyle = String(earringsStyleNumber).padStart(2, '0');

                return (
                  <TouchableOpacity key={colIndex} style={styles.item} onPress={() => handleEarringsStyleChange(`variant${formattedEarringsStyle}`)}>
                    <Avatar params={{
                      hair: [hairStyle],
                      hairColor: [hairColor],
                      skinColor: [skinColorStyle],
                      mouth: [],
                      eyes: [],
                      eyebrows: [],
                      earrings: [`variant${formattedEarringsStyle}`],
                      earringsProbability: 100,
                    }} />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
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
            style={[styles.stylePicker, { backgroundColor: buttonColor['Glasses'] }]}
            onPress={() => handlePage('Glasses')}>
            <Image style={{ width: 35, height: 35 }} source={require('../assets/Avatar-Shop/glassesStyle.png')} />
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
            style={[styles.stylePicker, { backgroundColor: buttonColor['Earrings'] }]}
            onPress={() => handlePage('Earrings')}>
            <Image style={styles.stylePickerImg} source={require('../assets/Avatar-Shop/earringsStyle.png')} />
          </TouchableOpacity>
        </View>
        )}
      </View>
  );
};

export default AvatarItemScroll;
