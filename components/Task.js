import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const Task = (props) => {
    return (
        <View style={styles.item}>

            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{props.text}</Text>

                <View style={styles.timeLeft}>
                    <Image style={styles.clockImage}
                        source={require('../assets/Home/Clock.png')} />
                    <Text style={styles.timetext}>{props.time}</Text>
                </View>
            </View>
            <View style={styles.itemCenter}>
            <Text style={styles.textCenter} >in progress</Text>

            </View>
            <View style={styles.itemRight}>
                <Image style={styles.pointImage}
                    source={require('../assets/Home/Points.png')} />
                <Text style={styles.pointstext}>{props.points}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#DAF4F0',
        padding: 20,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        width:'85%',
    },
    itemLeft: {
        flexDirection: 'column',   
        // flexWrap:'wrap',
    },
    clockImage: {
        width: 24,
        height: 26,
        marginRight: 7,
    },
    itemText: {
        marginBottom: 10,
        fontWeight: 'bold',
        maxWidth:'100%',
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
    itemCenter:{
        width:'35%',
        height:'45%',
        backgroundColor:'#E4E4E4',
        borderRadius:50,
        marginTop: '10%',
    },
    textCenter:{
        alignSelf:'center',
        fontWeight: 'bold',
    }
});

export default Task;