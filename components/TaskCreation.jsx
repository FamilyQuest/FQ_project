import React, { useState } from 'react';
import { Button, TextInput, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView, StatusBar } from "react-native";
import { Formik } from 'formik';
// import DropDownPicker from 'react-native-dropdown-picker';
import CustomSelectList from './dropDown';
import MySelectComponent from './MultipleSelectList ';


import styles from './taskCreation.style';

function TaskCreation() {
    const [assignToValue, setAssignToValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [selected, setSelected] = useState("");
    return (
        <View>
            <StatusBar backgroundColor="#A4E7DD" barStyle="dark-content" />
            <Text style={styles.title}>New Task</Text>
            <View style={styles.container} >
                <Formik initialValues={{ TaskName: '', Assign: '', category: '', points: '', Description: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                    {(props) => (
                        <View style={styles.form}>
                            <TextInput
                                style={styles.input}
                                placeholder='Task Name'
                                placeholderTextColor='black'
                                onChangeText={props.handleChange('TaskName')}
                                value={props.values.TaskName}

                            />
                            <CustomSelectList setSelected={setSelected} />
                            <TextInput
                                style={styles.input}
                                placeholder='Points'
                                placeholderTextColor='black'
                                onChangeText={props.handleChange('Points')}
                                value={props.values.Points}
                            />
                            <MySelectComponent />
                            <TextInput
                                style={[styles.input, styles.multilineInput]}
                                multiline
                                placeholder='Description'
                                placeholderTextColor='black'
                                onChangeText={props.handleChange('Description')}
                                value={props.values.Description}
                            />

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                color='#FFFFFF'
                                onPress={props.handleSubmit}
                            >
                                <Text style={styles.btnText}>Add now</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
}

export default TaskCreation;
