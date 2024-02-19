import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Checkbox from 'expo-checkbox';

import useDbConnection from './DataBase/dbConnection';
import styles from './logIn.style';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { users, getUserById, getUserByUsername, confirmLogIn } = useDbConnection();


  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // console.log('Users:', users);
    // console.log('User by ID:', getUserById(1));
    console.log('User by Username:', getUserByUsername('john_doe'));
    console.log('Log in:', confirmLogIn(username, password));
  };

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
          onSubmitEditing={() => { emailInput.focus(); }}
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
          returnKeyType="next"
          onSubmitEditing={() => { passwordInput.focus(); }}
          blurOnSubmit={false}
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
