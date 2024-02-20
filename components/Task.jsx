import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, StatusBar } from 'react-native';

import 'firebase/compat/storage';
import dbConnectionUsers from './DataBase/dbConnectionUsers';
import dbConnectionTasks from './DataBase/dbConnectionTasks';
import { firebase } from './DataBase/dbConnection';
import styles from './tasks.style';

const Task = (props) => {
    const [childModalVisible, setChildModalVisible] = useState(false);
    const [adminModalVisible, setAdminModalVisible] = useState(false);
    const { getUserById } = dbConnectionUsers();
    const { getUserIdByTaskId } = dbConnectionTasks();
    const [statusColor, setStatusColor] = useState({
        'in progress': '#E4E4E4',
        'pending': '#ffd166',
        'done': '#57cc99',
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
        if (props.status === 'in progress') {
            props.navigation.navigate("Camera", { userId: props.userId, taskId: props.taskId, taskTitle: props.text });
        }
    }
    if (taskUser) {
        firebase.storage().ref().child(`images/user_id_${taskUser.userId}/${props.text.replace(/\s/g, '_')}.jpg`).getDownloadURL().then((url) => {
            const img = url;
            console.log(img);
        }
        ).catch((error) => {
            return '';
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
                            <Image style={styles.clockImage} source={require('../assets/Home/Clock.png')} />
                            <Text style={styles.timetext}>{props.time}</Text>
                            <Text style={[styles.progresstext, { backgroundColor: statusColor[props.status] }]}>
                                {props.status}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.itemRight}>
                        <Image style={styles.pointImage} source={require('../assets/Home/Points.png')} />
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
                                <Text style={styles.textModal}>the task is {props.text} </Text>
                                <Text style={styles.textModal}>assigned to: {user && user.first_name ? user.first_name : ''} {user && user.last_name ? user.last_name : ''}</Text>
                                <Text style={styles.textModal}>category: {props.category}</Text>
                                <Text style={styles.textModal}>points: {props.points}</Text>
                                <Text style={styles.textModal}>description:</Text>
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
                        <Text style={styles.titleModal}>Assignment</Text>
                        {user && taskUser && user.userType === 'admin' && (
                            <Text style={styles.assigned}>
                                Assigned to: {taskUser.first_name ?? ''} {taskUser.last_name ?? ''}
                            </Text>
                        )}

                        <View style={styles.imageBox}>

                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.Btn1} onPress={closeModal}>
                                <Text style={styles.textBtn}>Not yet</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Btn2} onPress={openCamera}>
                                <Text style={styles.textBtn}>Finished</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.Btn1} onPress={closeModal}>
                            <Text style={styles.textBtn}>Not yet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Task;
