import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID } from '@env';

const getAllTasks = () => {
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

  return tasks;
};

export default getAllTasks;
