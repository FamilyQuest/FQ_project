import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { firebase } from '../DataBase/dbConnection';

import Button from './Button';

export default function MyCamera( {navigation, id} ) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        const filename = image.split('/').pop();
        const response = await fetch(image);
        const blob = await response.blob();
        const ref = firebase.storage().ref().child(`images/user_id_${id}/${filename}`);
        await ref.put(blob);
        setImage(null);
        navigation.goBack()
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View style={styles.cameraButtons}>
            <Button
              icon="retweet"
              onPress={() => setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )}
            />
            <Button
              icon="flash"
              onPress={() => setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
              )}
              color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#f1f1f1'}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View style={styles.bottomButtons}>
        {image ? (
          <View style={styles.buttonsContainer}>
            <Button title="Re-take" icon="retweet" onPress={() => setImage(null)} />
            <Button title="Save" icon="check" onPress={saveImage} />
          </View>
        ) : (
          <Button title="Take a picture" icon="camera" onPress={takePicture} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
  cameraButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
});


