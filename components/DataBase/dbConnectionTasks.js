import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { func } from 'prop-types';

const dbConnectionTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyAEhAIE9OBu4EIpaW2Xff-wuzNVYrx6Iow",
        authDomain: "familyquest-43f50.firebaseapp.com",
        projectId: "familyquest-43f50",
        storageBucket: "familyquest-43f50.appspot.com",
        messagingSenderId: "435404741742",
        appId: "1:435404741742:web:e964f4ae7470e38fa11a7f",
        measurementId: "G-VG2Z4F1K75",
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase();

    const tasksRef = ref(db, 'tasks/');
    get(tasksRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const tasksData = snapshot.val();
          const tasksArray = Object.keys(tasksData).map((key) => ({
            id: key,
            ...tasksData[key],
          }));
          setTasks(tasksArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getTasksByUserId(userId) {
    const foundTasks = tasks.filter(task => {
      if (Array.isArray(task.user_id)) {
        return task.user_id.includes(userId);
      } else if (typeof task.user_id === 'number' || typeof task.user_id === 'string') {
        return task.user_id === userId;
      } else {
        console.log("Invalid user_id for task:", task);
        return false;
      }
    });
  
    if (foundTasks.length > 0) {
      return foundTasks;
    } else {
      console.log("No tasks found for user with ID " + userId);
      return ['no tasks found'];
    }
  }
  

  function getTasksByAdminId(adminId) {
    console.log('tasks: ',tasks)
    console.log('adminId: ', adminId)
    const foundTasks = tasks.filter(task => task.admin_id == adminId);
    if (foundTasks.length > 0) {
      return foundTasks;
    } else {
      console.log("No tasks found for admin with ID " + adminId);
      return ['no tasks found'];
    }
  }

  function getUserIdByTaskId(taskId) {
    const foundTask = tasks.find(task => task.id === taskId);
    if (foundTask) {
      return foundTask.user_id;
    } else {
      console.log("No task found with ID " + taskId);
      return undefined;
    }
  }
  


  return { tasks ,getTasksByUserId };
}

export default dbConnectionTasks;
