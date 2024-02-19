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
    const foundTasks = tasks.filter(task => task.user_id === userId);
    if (foundTasks.length > 0) {
      return foundTasks;
    } else {
      console.log("No tasks found for user with ID " + userId);
      return [];
    }
  }
  


  return { tasks ,getTasksByUserId };
}

export default dbConnectionTasks;
