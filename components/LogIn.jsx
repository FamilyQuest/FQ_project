import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect

import dbConnectionUsers from './DataBase/dbConnectionUsers';
import styles from './logIn.style';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { users, getUserById, getUserByUsername, confirmLogIn } = dbConnectionUsers();

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    if(confirmLogIn(username, password) === true){
      const userId = getUserByUsername(username)['id'];
      navigation.navigate("Home", {userId: userId});
    }
  };

  // Use useFocusEffect to clear fields when screen gains focus
  useFocusEffect(
    React.useCallback(() => {
      // Clear fields when screen gains focus
      setUsername('');
      setEmail('');
      setPassword('');
    }, [])
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#A4E7DD" barStyle="dark-content" />
      <Image style={styles.logoImg} source={require('../assets/LogIn/Upsized_Logo.png')} />
      <View style={styles.inputContainer} keyboardShouldPersistTaps="handled">
        <Image style={styles.inputLogo} source={require(`../assets/LogIn/User.png`)} />
        <TextInput
          style={styles.input}
          placeholder='Username'
          value={username}
          onChangeText={setUsername}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => { passwordInput.focus(); }}
        />
        <View style={styles.empty} />
      </View>
      
      <View style={styles.inputContainer}>
        <Image style={styles.inputLogo} source={require(`../assets/LogIn/Pass.png`)} />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          ref={(input) => { passwordInput = input; }}
          onSubmitEditing={() => { emailInput.focus(); }}
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <View style={styles.empty} />
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.inputLogo} source={require(`../assets/LogIn/Email.png`)} />
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          ref={(input) => { emailInput = input; }}
        />
        <View style={styles.empty} />
      </View>
      <View style={styles.logInContainer}>
        <View style={styles.rememberContainer}>
          <Checkbox style={styles.checkbox} />
          <Text style={styles.logInText}>Remember me</Text>
        </View>
        <View>
          <Text style={styles.logInText}>Forgot Password?</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.logInText}>Don't have an account?</Text>
      <TouchableOpacity style={styles.signBtn}>
        <Text style={styles.signBtnText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
