import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, get, set, push } from 'firebase/database';
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
    const newEnviorment = {
      admin_id: admin_id,
      id: createNewEnviormentKey(),
      name: name,
      users: [],
    };

    const db = getDatabase();
    const enviormentsRef = ref(db, 'environments/');
    push(enviormentsRef, newEnviorment)
      .then((newRef) => {
        const newEnviormentWithId = { ...newEnviorment, id: newRef.key };
        setEnvironments([...environments, newEnviormentWithId]);
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
        console.log('here', enviorment)
      } else {
        enviorment.users.push(userId);
      }

      setEnvironments(updatedEnvironments);
    } else {
      console.error(`Environment with ID ${enviormentId} not found.`);
    }
  }


  return { environments, createEnviorment, getEnviormentByAdminId, addUserToEnviorment };
}

export default dbConnectionUsersAchivements;
