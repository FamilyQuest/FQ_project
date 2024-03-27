import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './signUp.style';
import dbConnectionUsers from '../DataBase/dbConnectionUsers';
import dbConnectionItems from '../DataBase/dbConnectionItems';
import dbConnectionAvatars from '../DataBase/dbConnectionAvatars';
import dbConnectionUsersAchivements from '../DataBase/dbConnectionUsersAchivements';
import dbConnectionEnviorments from '../DataBase/dbConnectionEnviorments';

function SignUp({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [enviormentName, setEnviormentName] = useState('');
  const [enviormentId, setEnviormentId] = useState('');

  const { users, addUser, newUserKey } = dbConnectionUsers();
  const { addItems } = dbConnectionItems();
  const { addAvatar } = dbConnectionAvatars();
  const { newUsersAchivements } = dbConnectionUsersAchivements();
  const { environments, createEnviorment, addUserToEnviorment, getEnviormentByAdminId } = dbConnectionEnviorments();

  // if(environments.length > 0) {
  //   console.log('enviorments:', environments);
  // }

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      Alert.alert('Invalid Name', 'First name and last name should contain only alphabetic characters.');
      return;
    }

    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber <= 0 || ageNumber >= 150) {
      Alert.alert('Invalid Age', 'Please enter a valid age.');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      Alert.alert('Invalid Phone', 'Please enter a valid 10-digit phone number.');
      return;
    }

    if (userType !== 'child' && userType !== 'admin') {
      Alert.alert('Invalid User Type', 'User type should be either "child" or "admin".');
      return;
    }

    let tmpEnviormentId;
    const newUserId = newUserKey();
    if (userType === 'admin') {
      const tmp = createEnviorment(newUserId, enviormentName);
      tmpEnviormentId = tmp.id;
    } else if (userType === 'child') {
      addUserToEnviorment(enviormentId, newUserId);
      tmpEnviormentId = enviormentId;
    }

    const newUser =
    {
      'Enviorment_id': tmpEnviormentId,
      'Points': 0,
      'age': age,
      'email': email,
      'first_name': firstName,
      'last_name': lastName,
      'password': password,
      'phone': phone,
      'userType': userType,
      'username': username,
    }
    console.log('Sign-up data:', newUser);

    addItems(newUserId);
    addAvatar(newUserId);
    newUsersAchivements(newUserId);
    addUser(newUser);

    
    

    setUsername('');
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setAge('');
    setPhone('');
    setUserType('');
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, marginTop: 50, marginBottom: 65 }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={styles.signTitle}>Sign Up</Text>
        </View>
        <View style={styles.signUpInputContainer}>
          <Text style={styles.signUpInputTitle}>UserName</Text>
        </View>
        <View style={styles.inputContainer} keyboardShouldPersistTaps="handled">
          <TextInput
            style={styles.input}
            placeholder='* Username'
            value={username}
            onChangeText={setUsername}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => { emailInput.focus(); }}
          />
          <View style={styles.empty} />
        </View>
        <View style={styles.signUpInputContainer}>
          <Text style={styles.signUpInputTitle}>Email</Text>
        </View>
        <View style={styles.inputContainer} keyboardShouldPersistTaps="handled">
          <TextInput
            style={styles.input}
            placeholder='* Email'
            value={email}
            onChangeText={setEmail}
            ref={(input) => { emailInput = input; }}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => { passwordInput.focus(); }}
          />
          <View style={styles.empty} />
        </View>
        <View style={styles.signUpInputContainer}>
          <Text style={styles.signUpInputTitle}>Password</Text>
        </View>
        <View style={styles.inputContainer} keyboardShouldPersistTaps="handled">
          <TextInput
            style={styles.input}
            placeholder='* Password'
            ref={(input) => { passwordInput = input; }}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => { firstNameInput.focus(); }}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.showPasswordButton}>
            <Text style={styles.showPassText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpInputContainer}>
          <Text style={styles.signUpInputTitle}>First Name</Text>
        </View>
        <View style={styles.inputContainer} keyboardShouldPersistTaps="handled">
          <TextInput
            style={styles.input}
            placeholder='* First Name'
            value={firstName}
            onChangeText={setFirstName}
            ref={(input) => { firstNameInput = input; }}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => { lastNameInput.focus(); }}
          />
          <View style={styles.empty} />
        </View>
        <View style={styles.signUpInputContainer}>
          <Text style={styles.signUpInputTitle}>Last Name</Text>
        </View>
        <View style={styles.inputContainer} keyboardShouldPersistTaps="handled">
          <TextInput
            style={styles.input}
            placeholder='* Last Name'
            value={lastName}
            onChangeText={setLastName}
            ref={(input) => { lastNameInput = input; }}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => { ageInput.focus(); }}
          />
          <View style={styles.empty} />
        </View>
        <View style={styles.signUpInputContainer}>
          <Text style={styles.signUpInputTitle}>Age</Text>
        </View>
        <View style={styles.inputContainer} keyboardShouldPersistTaps="handled">
          <TextInput
            style={styles.input}
            placeholder='* Age'
            value={age}
            onChangeText={setAge}
            ref={(input) => { ageInput = input; }}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => { phoneInput.focus(); }}
          />
          <View style={styles.empty} />
        </View>
        <View style={styles.signUpInputContainer}>
          <Text style={styles.signUpInputTitle}>Phone Number</Text>
        </View>
        <View style={styles.inputContainer} keyboardShouldPersistTaps="handled">
          <TextInput
            style={styles.input}
            placeholder='* Phone'
            value={phone}
            onChangeText={setPhone}
            ref={(input) => { phoneInput = input; }}
          />
          <View style={styles.empty} />
        </View>
        <View style={styles.signUpInputContainer}>
          <Text style={styles.signUpInputTitle}>User Type</Text>
        </View>
        <View style={styles.inputContainer} keyboardShouldPersistTaps="handled">
          <Picker
            style={styles.input}
            selectedValue={userType}
            onValueChange={(itemValue) => setUserType(itemValue)}
          >
            <Picker.Item label="* Select" value="" style={styles.pickerItem} />
            <Picker.Item label="Child" value="child" />
            <Picker.Item label="Admin" value="admin" />
          </Picker>
          <View style={styles.empty} />
        </View>
        {userType === 'child' && (
          <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={styles.signUpInputContainer}>
              <Text style={styles.signUpInputTitle}>Enviorment Name</Text>
            </View>
            <View style={styles.inputContainer}>
              <Picker
                style={styles.input}
                selectedValue={enviormentId}
                onValueChange={(itemValue) => setEnviormentId(itemValue)}
              >
                <Picker.Item label="* Select" value="" style={styles.pickerItem} />
                {environments.map((enviorment) => (
                  <Picker.Item key={enviorment.id} label={`${enviorment.id} ${enviorment.name}`} value={enviorment.id} />
                ))}
              </Picker>
            </View>
          </View>
        )}
        {userType === 'admin' && (
          <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={styles.signUpInputContainer}>
              <Text style={styles.signUpInputTitle}>Enviorment Name</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder='* Enviorment Name'
                value={enviormentName}
                onChangeText={setEnviormentName}
                ref={(input) => { nameInput = input; }}
              />
            </View>
          </View>
        )}

        <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default SignUp;
