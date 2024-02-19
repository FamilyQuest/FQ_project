import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CameraScreen from './screens/CameraScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
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
