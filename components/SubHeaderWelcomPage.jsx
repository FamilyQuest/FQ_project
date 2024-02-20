import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from './Task';

import dbConnectionTasks from "./DataBase/dbConnectionTasks";
import dbConnectionUsers from "./DataBase/dbConnectionUsers";

const SubHeader = ({ navigation, userId }) => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Welcome Back!</Text>
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
});

export default SubHeader;
