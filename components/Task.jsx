import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, StatusBar } from 'react-native';

import styles from './tasks.style';

const Task = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

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
                            <Text style={styles.progresstext}>in progress</Text>
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
                                <Text style={styles.textModal}>assigned to: </Text>
                                <Text style={styles.textModal}>category: </Text>
                                <Text style={styles.textModal}>points: </Text>
                                <Text style={styles.textModal}>description: </Text>
                                <Text style={styles.textModal}>description: </Text>
                                <View style={styles.modalScrollView}>
                                <ScrollView
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                >
                                    <Text style={styles.textModalBox}> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Text>
                                </ScrollView>
                                </View>
                               
                            </View>
                            <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.Btn1} onPress={closeModal}>
                                        <Text style={styles.textBtn}>Not yet</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.Btn2}>
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
