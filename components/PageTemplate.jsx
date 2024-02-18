import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, Text, View, ImageBackground, Dimensions } from 'react-native';
import { I18nManager, ScrollView,StatusBar } from "react-native";
import { Formik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import Header from './Page-Format/Header';
import Footer from './Page-Format/Footer';

const PageTemplate = () => {
  const [assignToValue, setAssignToValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/Backgrounds/bg1.png')}>
      <Header />
      <Text style={styles.title}>New Task</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <Formik initialValues={{ TaskName: '', Assign: '', category: '', points: '', Description: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {(props) => (
            <View style={styles.form}>
              <StatusBar backgroundColor="#A4E7DD" barStyle="dark-content" />
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Task Name'
                  placeholderTextColor='black'
                  onChangeText={props.handleChange('TaskName')}
                  value={props.values.TaskName}
                />
              </View>

              <View style={styles.inputContainer}>
                <DropDownPicker
                  placeholder='Assign to'
                  items={[
                    { label: 'Assign To', value: '' },
                    { label: 'Assignee 1', value: 'Assignee 1' },
                    { label: 'Assignee 2', value: 'Assignee 2' }
                  ]}
                  defaultValue={assignToValue}
                  containerStyle={styles.dropDownContainer}
                  style={styles.dropDown}
                  itemStyle={styles.dropDownItem}
                  dropDownStyle={styles.dropDown}
                  onChangeItem={item => setAssignToValue(item.value)}
                  placeholderStyle={styles.dropDownPlaceholder}
                />
              </View>

              <View style={styles.inputContainer}>
                <DropDownPicker
                  placeholder='Category'
                  items={[
                    { label: 'Category', value: '' },
                    { label: 'Category 1', value: 'Category 1' },
                    { label: 'Category 2', value: 'Category 2' }
                  ]}
                  defaultValue={categoryValue}
                  containerStyle={styles.dropDownContainer}
                  style={styles.dropDown}
                  itemStyle={styles.dropDownItem}
                  dropDownStyle={styles.dropDown}
                  onChangeItem={item => setCategoryValue(item.value)}
                  placeholderStyle={styles.dropDownPlaceholder}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Points'
                  placeholderTextColor='black'
                  onChangeText={props.handleChange('Points')}
                  value={props.values.Points}
                  
                  
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.multilineInput]}
                  multiline
                  placeholder='Description'
                  placeholderTextColor='black'
                  onChangeText={props.handleChange('Description')}
                  value={props.values.Description}
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  title='Add now'
                  color='#FFFFFF'
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
      <Footer />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop:35,
    
  },
  inputContainer: {
    marginBottom: 60,
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    borderColor:'#8DE1D5',
    borderWidth: 3,
    borderRadius:10,
    borderStyle:'dotted',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    width: '100%',
    fontSize:18,
  },
  multilineInput: {
    height: 100,
  },
  dropDownContainer: {
    height: 40,
    width: '100%',
  },
  dropDown: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dotted', 
    borderColor:'#8DE1D5',
    borderWidth: 0,
    borderRadius:0,
    
  },
  dropDownItem: {
    justifyContent: 'flex-start',
  },
  dropDownPlaceholder: {
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: '#FF6E6B',
    borderRadius: 5,
    width: '70%',
  },
});

export default PageTemplate;
