import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, get, set } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID } from '@env';

const dbConnectionShopItems = () => {
  const [shopItems, setShopItems] = useState([]);

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

    const shopItemsRef = ref(db, '/ShopItems');
    get(shopItemsRef).then((snapshot) => {
      if (snapshot.exists()) {
        setShopItems(snapshot.val());
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return { shopItems };
}

export default dbConnectionShopItems;