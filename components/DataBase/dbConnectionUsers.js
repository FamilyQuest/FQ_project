import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID  } from '@env'; 

const dbConnectionUsers = () => {
  const [users, setUsers] = useState([]);

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

    const usersRef = ref(db, 'users/');
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersData = snapshot.val();
          const usersArray = Object.keys(usersData).map((key) => ({
            id: key,
            ...usersData[key],
          }));
          setUsers(usersArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getUserById(userId) {
    const foundUser = users.find(user => user.id === userId);
    if (foundUser) {
      return foundUser;
    } else {
      console.log("User with ID " + userId + " not found.");
      return undefined;
    }
  }

  function getUserByUsername(userName) {
    const foundUser = users.find(user => user.username === userName);
    if (foundUser) {
      return foundUser;
    } else {
      console.log("User with ID " + userName + " not found.");
      return undefined;
    }
  }

  function confirmLogIn(userName, password) {
    const foundUser = users.find(user => user.username === userName);
    if (foundUser) {
      if (foundUser.password === password) {
        return true;
      } else {
        console.log("Incorrect password for user " + userName);
        return false;
      }
    } else {
      console.log("User with username " + userName + " not found.");
      return false;
    }
  }




  return { users, getUserById, getUserByUsername, confirmLogIn };
}

export default dbConnectionUsers;
