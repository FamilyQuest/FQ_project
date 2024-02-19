// import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from './Task';

import dbConnectionUsers from './DataBase/dbConnectionUsers';
import dbConnectionTasks from "./DataBase/dbConnectionTasks";

const SubHeader = () => {
  const { users, getUserById, getUserByUsername, confirmLogIn } = dbConnectionUsers();
  const { tasks, getTasksByUserId } = dbConnectionTasks();

  const tasksArray = getTasksByUserId(1);
  return (
    <View style={styles.container}>
        <Text style={styles.sectionTitle}>Welcome Back!</Text>
        <Text style={styles.sectionSubTitle}>Today's Tasks </Text>
        <View style={{height: "60%"}}>
          <ScrollView showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.scrollViewContent}
          >
            {tasksArray.map((task, index) => (
              <Task key={index} text={task.title} time={task.time} points={task.points} category={task.category} description={task.description} />
            ))}
        </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 40,
    marginTop: 20,
    color: '#363636',
    fontWeight: 'bold',
    alignSelf:'center',
  },
  sectionSubTitle: {
    fontSize: 20,
    color: '#363636',
    fontWeight: 'bold',
    alignSelf:'center',
    marginVertical:10,
    
  },
});

export default SubHeader;
