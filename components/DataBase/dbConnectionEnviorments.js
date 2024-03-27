import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, get, set, update  } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID } from '@env';

const dbConnectionUsersAchivements = () => {
  const [environments, setEnvironments] = useState([]);

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

    const enviormentsRef = ref(db, 'environments/');
    get(enviormentsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const enviormentsData = snapshot.val();
          const enviormentsArray = Object.keys(enviormentsData).map((key) => ({
            id: key,
            ...enviormentsData[key],
          }));
          setEnvironments(enviormentsArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function createNewEnviormentKey() {
    const lastEnviorment = environments[environments.length - 1];
    return lastEnviorment.admin_id + 1;
  }
  
  function createEnviorment(admin_id, name) {
    const newEnviormentKey = environments.length > 0 ? environments.length.toString() : '0';
    const newEnviorment = {
      admin_id: admin_id,
      id: createNewEnviormentKey(),
      name: name,
      users: [admin_id],
    };
  
    const db = getDatabase();
    const enviormentRef = ref(db, `environments/${newEnviormentKey}`);
    set(enviormentRef, newEnviorment)
      .then(() => {
        setEnvironments([...environments, newEnviorment]);
      })
      .catch((error) => {
        console.error("Error adding environment: ", error);
      });
  }
  

  function getEnviormentByAdminId(adminId) {
    const enviorment = environments.find(enviorment => enviorment.admin_id === adminId);
    if (enviorment) {
      return enviorment;
    } else {
      return undefined;
    }
  }

  function addUserToEnviorment(enviormentId, userId) {
    const enviormentIndex = environments.findIndex(enviorment => enviorment.id === enviormentId);
  
    if (enviormentIndex !== -1) {
      const updatedEnvironments = [...environments];
      const enviorment = updatedEnvironments[enviormentIndex];
  
      if (!enviorment.users) {
        enviorment.users = [userId];
      } else {
        enviorment.users.push(userId);
      }
      const db = getDatabase();
      const enviormentRef = ref(db, `environments/${enviormentIndex}`);
      update(enviormentRef, { users: enviorment.users })
        .then(() => {
          console.log("Environment updated in the database.");
        })
        .catch((error) => {
          console.error("Error updating environment in the database:", error);
        });
  
      setEnvironments(updatedEnvironments);
    } else {
      console.error(`Environment with ID ${enviormentId} not found.`);
    }
  }

  return { environments, createEnviorment, getEnviormentByAdminId, addUserToEnviorment };
}

export default dbConnectionUsersAchivements;
