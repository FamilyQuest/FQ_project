import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CameraScreen from './screens/CameraScreen';
import AvatarScreen from './screens/AvatarScreen';
import SignupScreen from './screens/SignupScreen';
import SubmitTaskScreen from './screens/SubmitTaskScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import ShopScreen from './screens/ShopScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Avatar" component={AvatarScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SubmitTask" component={SubmitTaskScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Achievements" component={AchievementsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

