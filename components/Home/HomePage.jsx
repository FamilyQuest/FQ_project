import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';

import Task from './Task';

import dbConnectionTasks from "../DataBase/dbConnectionTasks";
import dbConnectionUsers from "../DataBase/dbConnectionUsers";
import { I18nManager } from "react-native";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

const HomePage = ({ navigation, userId }) => {
  const { getTasksByUserId, getTasksByAdminId } = dbConnectionTasks();
  const { getUserById } = dbConnectionUsers();
  const user = getUserById(userId);
  
  let tasksArray = [];
  if (user) {
    if(user.userType === 'admin'){
       tasksArray = getTasksByAdminId(userId);
    }else{
       tasksArray = getTasksByUserId(userId);
    }
  }
  if( tasksArray[0] === 'no tasks found'){
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Welcome {user.first_name}!</Text>
        <View style={{ height: "60%",alignItems:'center',justifyContent:'center' }}>
        <Text style={styles.sectionSubTitle}>No tasks found for today</Text>
        </View>
      </View>
    );
  }
  if (tasksArray.length === 0) {
    

    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#FF6E6B" />
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Welcome {user.first_name}!</Text>
      <Text style={styles.sectionSubTitle}>Today's Tasks </Text>
      <View style={{ height: "60%" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {tasksArray.map((task, index) => (
            <Task
              navigation={navigation}
              key={index}
              taskId={task.id}
              text={task.title}
              time={task.time}
              points={task.points}
              category={task.category}
              description={task.description}
              status={task.status}
              userId={userId}
            />
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
    alignSelf: 'center',
  },
  sectionSubTitle: {
    fontSize: 20,
    color: '#363636',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
