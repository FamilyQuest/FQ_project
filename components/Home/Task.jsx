import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, StatusBar } from 'react-native';
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import 'firebase/compat/storage';
import dbConnectionUsers from '../DataBase/dbConnectionUsers';
import dbConnectionTasks from '../DataBase/dbConnectionTasks';
import { firebase } from '../DataBase/dbConnection';
import styles from './tasks.style';

const Task = (props) => {
    const [childModalVisible, setChildModalVisible] = useState(false);
    const [adminModalVisible, setAdminModalVisible] = useState(false);
    const [img, setImg] = useState('../assets/Empty.png');
    const { getUserById, updatePointsByUserId } = dbConnectionUsers();
    const { getUserIdByTaskId, updateStatusTaskByTaskIdAndUserId } = dbConnectionTasks();
    const [statusColor, setStatusColor] = useState({
        'Getting Ready': '#E4E4E4',
        'Almost There': '#ffd166',
        'All Set!': '#57cc99',
        'Time to Fix': '#ff6b6b'
    });

    const user = getUserById(props.userId);
    let taskUser = null;
    if (user && user.userType === 'admin') {
        const taskUserId = getUserIdByTaskId(props.taskId);
        
        if (taskUserId) {
            taskUser = getUserById(taskUserId);
            
        }
    }

    const openModal = () => {
        if(props.status === 'All Set!') return;
        if (user && user.userType === 'admin') {
            setAdminModalVisible(true);
        } else {
            setChildModalVisible(true);
        }
    };

    const closeModal = () => {
        setChildModalVisible(false);
        setAdminModalVisible(false);
    };

    const openCamera = () => {
        if (props.status === 'Getting Ready' || props.status === 'Time to Fix') {
            closeModal();
            props.navigation.navigate("Camera", { userId: props.userId, taskId: props.taskId, taskTitle: props.text });
        }
    }

    const AcceptTask = () => {
        if (user && user.userType === 'admin') {
            updateStatusTaskByTaskIdAndUserId(props.userId, props.taskId, 'All Set!');
            updatePointsByUserId(props.userId, user.Points + props.points);
            closeModal();
        }
    }

    const DeclineTask = () => {
        if (user && user.userType === 'admin') {
            updateStatusTaskByTaskIdAndUserId(props.userId, props.taskId, 'Time to Fix');
            closeModal();
        }
    }
    // console.log("this is my test to see the status: ",props.status);
    // console.log("this is my test to see the status: ",taskUser);
    if (taskUser && props.status === 'Almost There') {
        firebase.storage().ref().child(`images/user_id_${taskUser.id}/${props.text.replace(/\s/g, '_')}.jpg`)
            .getDownloadURL()
            .then((url) => {
                console.log("this is my test",url);
                setImg(url); // Set the image URL using state
            })
            .catch((error) => {
                console.error("Error fetching image URL:", error);
            });
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#A4E7DD'} barStyle={'dark-content'} />
            <TouchableOpacity onPress={openModal}>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemText}>{props.text}</Text>
                        <View style={styles.timeLeft}>
                            <Image style={styles.clockImage} source={require('../../assets/Home/Clock.png')} />
                            <Text style={styles.timetext}>{props.time}</Text>
                            <Text style={[styles.progresstext, { backgroundColor: statusColor[props.status] }]}>
                                {props.status}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <Image style={styles.pointImage} source={require('../../assets/Home/Points.png')} />
                        <Text style={styles.pointstext}>{props.points}</Text>
                    </View>

                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={childModalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.childModalContent}>
                        <Text style={styles.titleModal}>Assignment</Text>
                        <View style={styles.modalTextContainer}>
                            <View>
                                <Text style={styles.textModal}>The task is {props.text} </Text>
                                <Text style={styles.textModal}>Assigned to: {user && user.first_name ? user.first_name : ''} {user && user.last_name ? user.last_name : ''}</Text>
                                <Text style={styles.textModal}>Category: {props.category}</Text>
                                <Text style={styles.textModal}>Points: {props.points}</Text>
                                <Text style={styles.textModal}>Description:</Text>
                                <View style={styles.modalScrollView}>
                                    <ScrollView
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <Text style={styles.textModalBox}>
                                            {props.description}
                                        </Text>
                                    </ScrollView>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.Btn1} onPress={closeModal}>
                                    <Text style={styles.textBtn}>Not yet</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.Btn2} onPress={openCamera}>
                                    <Text style={styles.textBtn}>Finished</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={adminModalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.adminModalContent}>
                        <Text style={styles.titleModalMargin}>Assignment</Text>
                        {user && taskUser && user.userType == 'admin' && (
                            <Text style={styles.assigned}>
                                Assigned to: {taskUser.first_name ?? ''} {taskUser.last_name ?? ''}
                            </Text>
                        )}
                        <TouchableOpacity style={styles.exitContainer} onPress={closeModal}>
                            <Image style={styles.exitBtn} source={require("../../assets/Home/cross.png")}/>
                        </TouchableOpacity>
                        <View style={styles.imageBox}>
                            <Image
                            
                                source={{ uri: img }}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.Btn1} onPress={DeclineTask}>
                                <Text style={styles.textBtn}>Decline</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Btn2} onPress={AcceptTask}>
                                <Text style={styles.textBtn}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Task;
