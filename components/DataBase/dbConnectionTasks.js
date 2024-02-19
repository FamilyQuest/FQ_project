import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set } from 'firebase/database';
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
    const foundTasks = tasks.filter(task => task.user_id === userId);
    if (foundTasks.length > 0) {
      return foundTasks;
    } else {
      console.log("No tasks found for user with ID " + userId);
      return [];
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
    const taskRef = ref(db, `tasks/${taskId-1}/status`);
    set(taskRef, newStatus) // Update only the status in the database
      .then(() => console.log("Task status updated successfully"))
      .catch((error) => console.error("Error updating task status:", error));
  }


  return { tasks, getTasksByUserId, updateStatusTaskByTaskIdAndUserId };
}

export default dbConnectionTasks;
