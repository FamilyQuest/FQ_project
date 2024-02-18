import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const useDbConnection = () => {
  const [users, setUsers] = useState([]);

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

export default useDbConnection;
