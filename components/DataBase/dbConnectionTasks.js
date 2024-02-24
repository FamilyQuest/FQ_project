import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, get, set, onValue } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID } from '@env';

const dbConnectionTasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const firebaseConfig = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGINGSENDER_ID,
      appId: APP_ID,
      measurementId: MEASUREMETN_ID,
    };

    if (!firebase.apps.length) {
      const app = initializeApp(firebaseConfig);
    }
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

    // Add listener for changes in tasks data
    const unsubscribe = onValue(tasksRef, (snapshot) => {
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
    });

    // Clean up listener on component unmount
    return () => {
      unsubscribe(); // Remove the listener
    };
  }, []);

  function getTasksByUserId(userId) {
    const foundTasks = tasks.filter(task => task.user_id === userId);
    if (foundTasks.length > 0) {
      return foundTasks;
    } else {
      console.log("No tasks found for user with ID " + userId);
      return [];
    }
  }

  function getTasksByAdminId(adminId) {
    const foundTasks = tasks.filter(task => task.admin_id === adminId);
    if (foundTasks.length > 0) {
      return foundTasks;
    } else {
      console.log("No tasks found for user with ID " + adminId);
      return [];
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

  function updateStatusTaskByTaskIdAndUserId(userId, taskId, newStatus) {
    const updatedTasks = tasks.map(task => {
      if (task.user_id === userId && task.id === taskId) {
        return { ...task, status: newStatus };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks); // Update local state

    const db = getDatabase();
    const taskRef = ref(db, `tasks/${taskId - 1}/status`);
    set(taskRef, newStatus) // Update only the status in the database
      .then(() => console.log("Task status updated successfully"))
      .catch((error) => console.error("Error updating task status:", error));
  }

  return { tasks, getTasksByUserId, updateStatusTaskByTaskIdAndUserId, getTasksByAdminId, getUserIdByTaskId };
}

export default dbConnectionTasks;
