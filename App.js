import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CameraScreen from './screens/CameraScreen';
import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from "react";
import dbConnectionTasks from "./components/DataBase/dbConnectionTasks";
import dbConnectionUsers from "./components/DataBase/dbConnectionUsers";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Stack = createNativeStackNavigator();

export default function App() {
  const notificationListener = useRef();
  const responseListener = useRef();
  const [expoPushToken, setExpoPushToken] = useState(null);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // Periodically check for changed tasks
    const interval = setInterval(checkForTasks, 6000); // Check every minute
    return () => {
      clearInterval(interval);
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // Function to periodically check for tasks
  const checkForTasks = () => {
    AsyncStorage.getItem('userId').then(userId => {
      if (userId) {
        checkTasks(userId);
      }
    });
  };

  // Function to check for changed tasks
  const checkTasks = async (userId) => {
    console.log("this is my before test"); // it gets stuck here
    const { getTasksByAdminId } = dbConnectionTasks();
    console.log("this is my before test v2");
    const { getUserById } = dbConnectionUsers();
    console.log("this is my before test v1");
    const user = getUserById(userId);
    let tasksArray = [];
   
    if (user) {
      console.log("this is my test", user);
      if (user.userType === 'admin') {
        tasksArray = getTasksByAdminId(userId);
      } 
      if (tasksHaveChanged(tasksArray)) {
        await schedulePushNotification();
      }
    }
  };

  // Function to check if tasks have changed
  const tasksHaveChanged = (newTasksArray) => {
    for (const task of newTasksArray) {
      if (task.status === 'pending') {
        return true; 
      }
    }
    return false; 
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got a notification! 📬",
      body: 'A finished task is awaiting for check',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (await Notifications.getExpoPushTokenAsync({ projectId: '9318aaba-1ba2-4b13-9350-1cab77d19dbe' })).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
