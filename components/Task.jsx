import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, StatusBar } from 'react-native';

import dbConnectionUsers from './DataBase/dbConnectionUsers';
import styles from './tasks.style';


const Task = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { users, getUserById, getUserByUsername, confirmLogIn } = dbConnectionUsers();

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const openCamera = () => {
        console.log('open camera');
        props.navigation.navigate("Camera",{id:props.id});

    }

    const user = getUserById(1);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#A4E7DD'} barStyle={'dark-content'}/>
            <TouchableOpacity onPress={openModal}>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemText}>{props.text}</Text>
                        <View style={styles.timeLeft}>
                            <Image style={styles.clockImage} source={require('../assets/Home/Clock.png')} />
                            <Text style={styles.timetext}>{props.time}</Text>
                            <Text style={styles.progresstext}>{props.status}</Text>
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
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
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
        </View>
    );
}

export default Task;
