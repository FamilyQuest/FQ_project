import React from 'react';
import { View } from 'react-native';

import MyCamera from '../components/Camera/MyCamera';

export default function CameraScreen({route, navigation}) {
    const { userId, taskId } = route.params;
  return (
    <View style={{    flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',}}>
      <MyCamera navigation={navigation} userId={userId} taskId={taskId}/>
    </View>
  );
}

