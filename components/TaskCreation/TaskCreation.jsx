import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import { StatusBar } from "react-native";
import { Formik } from 'formik';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, get } from "firebase/database";
import CustomSelectList from './dropDown';
import styles from './taskCreation.style';
import { MySelectComponent } from './MultipleSelectList ';
import firebase from './firebaseConfig';

const db = getDatabase(firebase);
const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const formattedHours = String(hours).padStart(2, '0');
const formattedMinutes = String(minutes).padStart(2, '0');
const formattedTime = `${formattedHours}:${formattedMinutes}`;
function TaskCreation({ navigation,userId }) {
    const [selected, setSelected] = useState('');
    const [currentCount, setCurrentCount] = useState(0);
    const [multiSelected, multiSetSelected] = useState([]);
    useEffect(() => {
        const counterRef = ref(db, 'counters/taskCount');
        get(counterRef).then((snapshot) => {
            if (snapshot.exists()) {

                setCurrentCount(snapshot.val().count);
            } else {
                setCurrentCount(5);
            }
        }).catch((error) => {
            console.error('Error retrieving counter:', error);
        });
    }, []);

    const addTask = async (values) => {
        try {
            const newCount = currentCount + 1;
            console.log('Category value:', values.category);
            const tasksRef = ref(db, `tasks/${newCount}`);
            await set(tasksRef, {
                admin_id: userId,
                category: selected,
                description: values.Description,
                id: newCount + 1,
                points: values.points,
                status: 'Getting Ready',
                time: formattedTime,
                title: values.title,
                user_id: multiSelected,
            });

            const counterRef = ref(db, 'counters/taskCount');
            await set(counterRef, { count: newCount });

            console.log('Task added successfully with ID:', newCount);
            setCurrentCount(newCount);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <View>
            <StatusBar backgroundColor="#A4E7DD" barStyle="dark-content" />
            <Text style={styles.title}>New Task</Text>
            <ScrollView contentContainerStyle={styles.container}>
                <Formik initialValues={{ title: '', user_id: '', status: '', category: '', points: '', Description: '' }}
                    onSubmit={(values) => addTask(values)}>
                    {(props) => (
                        <View style={styles.form}>
                            <TextInput
                                style={styles.input}
                                placeholder='Task Name'
                                placeholderTextColor='black'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                            />
                            <CustomSelectList setSelected={setSelected} />
                            <MySelectComponent setSelected={multiSetSelected} />

                            <TextInput
                                style={styles.input}
                                placeholder='points'
                                placeholderTextColor='black'
                                onChangeText={props.handleChange('points')}
                                value={props.values.points}
                            />
                            <TextInput
                                style={[styles.input, styles.multilineInput]}
                                multiline
                                placeholder='Description'
                                placeholderTextColor='black'
                                onChangeText={props.handleChange('Description')}
                                value={props.values.Description}
                                textAlignVertical="top"
                            />
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                color='#FFFFFF'
                                onPress={() => {
                                    props.handleSubmit();
                                    navigation.goBack();
                                }}
                            >
                                <Text style={styles.btnText}>Add now</Text>
                            </TouchableOpacity>

                        </View>
                    )}
                </Formik>
            </ScrollView>
        </View>
    );
}

export default TaskCreation;
