import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useFocusEffect } from '@react-navigation/native';
import dbConnectionUsers from '../DataBase/dbConnectionUsers';
import styles from './logIn.style';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrect, setIncorrect] = useState(false);
  const { users, reloadUsers, getUserById, getUserByUsername, confirmLogIn } = dbConnectionUsers();

  useEffect(() => {
    if (users) {
      reloadUsers();
    }
  }, []);
  
  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    if (confirmLogIn(username, password) === true) {
      const user = getUserByUsername(username);
      setIncorrect(false);
      // console.log("this is my test",userId);
      // AsyncStorage.setItem('userId', JSON.stringify(userId));
      navigation.navigate("Home", { userId: user['id'], userType: user['userType'] });
    } else {
      setIncorrect(true);
    }
  };

  // Use useFocusEffect to clear fields when screen gains focus
  useFocusEffect(
    React.useCallback(() => {
      // Clear fields when screen gains focus
      setUsername('');
      setPassword('');
    }, [])
  );
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#A4E7DD" barStyle="dark-content" />
      <Image style={styles.logoImg} source={require('../../assets/LogIn/Upsized_Logo.png')} />
      <View style={styles.inputContainer} keyboardShouldPersistTaps="handled">
        <Image style={styles.inputLogo} source={require(`../../assets/LogIn/User.png`)} />
        <TextInput
          style={styles.input}
          placeholder='* Username'
          value={username}
          onChangeText={setUsername}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => { passwordInput.focus(); }}
        />
        <View style={styles.empty} />
      </View>

      <View style={styles.inputContainer}>
        <Image style={styles.inputLogo} source={require(`../../assets/LogIn/Pass.png`)} />
        <TextInput
          style={styles.input}
          placeholder='* Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          ref={(input) => { passwordInput = input; }}
        />
        <View style={styles.empty} />
      </View>
      {incorrect && (
        <View style={styles.incorrectBox}>
          <Text style={styles.incorrectText}>Incorrect username or password</Text>
        </View>
      )}
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.logInText}>Don't have an account?</Text>
      <TouchableOpacity style={styles.signBtn} onPress={() => { setIncorrect(false); navigation.navigate("Signup");}}>
        <Text style={styles.signBtnText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
