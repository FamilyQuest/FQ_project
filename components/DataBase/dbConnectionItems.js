import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, get, set } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID } from '@env';

const dbConnectionItems = () => {
  const [items, setItems] = useState([]);

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

    const itemsRef = ref(db, 'items/');
    get(itemsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const itemsData = snapshot.val();
          const itemsArray = Object.keys(itemsData).map((key) => ({
            id: key,
            ...itemsData[key],
          }));
          setItems(itemsArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getItemsByUserId(userId) {
    const foundItems = items.find(items => items.user_id === userId);
    if (foundItems) {
      return foundItems;
    } else {
      return undefined;
    }
  }

  return { items, getItemsByUserId };

}

export default dbConnectionItems;
