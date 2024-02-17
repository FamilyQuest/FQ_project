import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './Task';

const TasksList = () => {
    return(
        <View style={styles.tasksWrapper}>
            <View style={styles.items}>
                {/*this is where the tasks will go!*/}
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tasksWrapper:{
        paddingHorizontal: 20,
    },
    itesm:{

    },
});
export default TasksList;