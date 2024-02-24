import React from 'react';
import { View, I18nManager } from 'react-native';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import MyCamera from '../components/Camera/MyCamera';
import Header from '../components/Page-Format/Header';

export default function CameraScreen({ route, navigation }) {
  const { userId, taskId, taskTitle } = route.params;
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
    }}>
      <Header navigation={navigation} screenName={'Home'} visible={false}/>
      <MyCamera navigation={navigation} userId={userId} taskId={taskId} taskTitle={taskTitle} />
    </View>
  );
}

