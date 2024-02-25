import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, get, set } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID } from '@env';

const dbConnectionAvatars = () => {
  const [avatars, setAvatars] = useState([]);

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

    const avatarsRef = ref(db, 'Avatars/');
    get(avatarsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const avatarsData = snapshot.val();
          const avatarsArray = Object.keys(avatarsData).map((key) => ({
            id: key,
            ...avatarsData[key],
          }));
          setAvatars(avatarsArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getAvatarById(userId) {
    const foundAvatar = avatars.find(avatar => avatar.user_id === userId);
    if (foundAvatar) {
      return foundAvatar;
    } else {
      return undefined;
    }
  }



  function updateAvatarByUserId(userId, avatar) {
    const db = getDatabase();
    const avatarRef = ref(db, `Avatars/${userId-1}`);

    set(avatarRef, avatar)
      .then(() => {
        console.log("Avatar updated successfully");
      })
      .catch((error) => {
        console.error("Error updating avatar: ", error);
      });
}


  return { avatars, getAvatarById, updateAvatarByUserId };
}

export default dbConnectionAvatars;
