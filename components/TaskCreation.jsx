import React, { useState } from 'react';
import { Button, TextInput, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView, StatusBar } from "react-native";
import { Formik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './taskCreation.style';

function TaskCreation() {
    const [assignToValue, setAssignToValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
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
                            <DropDownPicker
                                placeholder='Assign to'
                                items={[
                                    { label: 'Assign To', value: '' },
                                    { label: 'Assignee 1', value: 'Assignee 1' },
                                    { label: 'Assignee 2', value: 'Assignee 2' },
                                    { label: 'Assignee 3', value: 'Assignee 3' },
                                    { label: 'Assignee 4', value: 'Assignee 4' },
                                    { label: 'Assignee 5', value: 'Assignee 5' },
                                    { label: 'Assignee 6', value: 'Assignee 6' },
                                    { label: 'Assignee 7', value: 'Assignee 7' },
                                    { label: 'Assignee 8', value: 'Assignee 8' },
                                    { label: 'Assignee 9', value: 'Assignee 9' },
                                    { label: 'Assignee 10', value: 'Assignee 10' }
                                ]}
                                defaultValue={assignToValue}
                                containerStyle={styles.dropDownContainer}
                                style={styles.dropDown}
                                itemStyle={styles.dropDownItem}
                                dropDownStyle={styles.dropDown}
                                onChangeItem={item => setAssignToValue(item.value)}
                                placeholderStyle={styles.dropDownPlaceholder}
                            />
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
                            <TextInput
                                style={styles.input}
                                placeholder='Points'
                                placeholderTextColor='black'
                                onChangeText={props.handleChange('Points')}
                                value={props.values.Points}
                            />
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
