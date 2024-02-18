import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button } from 'react-native';

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
            <TouchableOpacity onPress={openModal}>
                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemText}>{props.text}</Text>
                        <View style={styles.timeLeft}>
                            <Image style={styles.clockImage} source={require('../assets/Home/Clock.png')} />
                            <Text style={styles.timetext}>{props.time}</Text>
                        </View>
                    </View>
                    <View style={styles.itemCenter}>
                        <Text style={styles.textCenter}>in progress</Text>
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
                        <View style={styles.modalTextContainer}>
                        <Text>the task is {props.text} </Text>
                        <Text>assigned to: </Text>
                        <Text>category: </Text>
                        <Text>points: </Text>
                        <Text>description: </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                        <Button title="not yet" onPress={closeModal} />
                        <Button title="finished"/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',

    },
    item: {
        backgroundColor: '#DAF4F0',
        padding: 20,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        width: '90%',
    },
    itemLeft: {
        flexDirection: 'column',
    },
    clockImage: {
        width: 24,
        height: 26,
        marginRight: 7,
    },
    itemText: {
        marginBottom: 10,
        fontWeight: 'bold',
        maxWidth: '100%',
    },
    timeLeft: {
        flexDirection: 'row',
    },
    timetext: {
        color: '#A6A6A6',
        fontSize: 15,
    },
    itemRight: {
        alignItems: 'center',
    },
    pointstext: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    itemCenter: {
        width: '35%',
        height: '45%',
        backgroundColor: '#E4E4E4',
        borderRadius: 50,
        marginTop: '10%',
    },
    textCenter: {
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
    },
    modalContent: {
        backgroundColor: '#fff',
        paddingHorizontal:'20%',
        paddingVertical:'60%',
        borderRadius: 10,
        alignItems: 'center',
        borderColor:'#8DE1D5',
        borderWidth:6,
        flexDirection:'column',
    },
    buttonContainer:{
        width:"90%",
        flexDirection:'row',
        justifyContent:'space-between',
    },
    modalTextContainer:{
        width:'100%',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        alignSelf:'flex-start',
        alignContent:'flex-start',
    },
});

export default Task;
