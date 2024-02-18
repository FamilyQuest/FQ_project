import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, Text, View, ImageBackground } from 'react-native';
import { I18nManager } from "react-native";
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
      style={{ height: "100%", width: "100%" }}
      source={require('../assets/Backgrounds/bg1.png')}>
      <Header />
      <View style={styles.container}>
        <Formik initialValues={{ TaskName: '', Assign: '', category: '', points: '', Description: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <View style={styles.container}>
              <Text style={{ marginBottom: 80, marginTop: -150, fontSize: 40 }}>New Task</Text>

              <View style={[styles.inputContainer, { width: 350, marginBottom: 40 }]}>
                <TextInput
                  style={[styles.input, { fontSize: 18 }]}
                  placeholder='Task Name'
                  placeholderTextColor='black'
                  onChangeText={props.handleChange('TaskName')}
                  value={props.values.TaskName}
                />
              </View>

              <View style={[styles.inputContainer, { marginBottom: 40 }]}>
                <DropDownPicker
                  placeholder='Assign to'
                  placeholderTextColor='black'
                  items={[
                    { label: 'Assign To', value: '' },
                    { label: 'Assignee 1', value: 'Assignee 1' },
                    { label: 'Assignee 2', value: 'Assignee 2' }
                  ]}
                  defaultValue={assignToValue}
                  containerStyle={{ height: 40 }}
                  style={styles.input}
                  itemStyle={{ justifyContent: 'flex-start' }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                  onChangeItem={item => setAssignToValue(item.value)}
                  placeholderStyle={{ fontSize: 18 }} 
                />
              </View>

              <View style={[styles.inputContainer, { marginBottom: 40 }]}>
                <DropDownPicker
                  placeholder='Category'
                  items={[
                    { label: 'Category', value: '' },
                    { label: 'Category 1', value: 'Category 1' },
                    { label: 'Category 2', value: 'Category 2' }
                  ]}
                  defaultValue={categoryValue}
                  containerStyle={{ height: 40 }}
                  style={styles.input}
                  itemStyle={{ justifyContent: 'flex-start' }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                  onChangeItem={item => setCategoryValue(item.value)}
                  placeholderStyle={{ fontSize: 18 }} 
                />

              </View>

              <View style={[styles.inputContainer, { width: 350, marginBottom: 40 }]}>
              <TextInput
                  style={[styles.input, { fontSize: 18 }]}
                  placeholder='Points'
                  placeholderTextColor='black'
                  onChangeText={props.handleChange('Points')}
                  value={props.values.Points}
                />
              </View>

              <View style={[styles.inputContainer, { marginBottom: 40 }]}>
                <TextInput
                  style={[
                    styles.input,
                    styles.multilineInput,
                    { width: 330 },
                    { fontSize: 18 }
                  ]}
                  multiline

                  placeholder='Description'
                  placeholderTextColor='black'
                  onChangeText={props.handleChange('Description')}
                  value={props.values.Description}
                />
              </View>

              <View style={{ backgroundColor: '#FF6E6B', borderRadius: 5, width: 330, marginBottom: 10 }}>
                <Button
                  title='Add now'
                  color='#FFFFFF'
                  onPress={props.handleSubmit}
                />
              </View>
            </View>

          )}
        </Formik>
      </View>
      <Footer />
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
    backgroundColor: 'transparent',

  },
  inputContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#8DE1D5',
    borderStyle: 'dashed',
    borderRadius: 5,
    width: '100%',
    borderWidth: 3
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    width: '100%',

  }

  ,
  multilineInput: {
    height: 100,
  },
});


export default PageTemplate;
