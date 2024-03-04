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

  function newItemsKey() {
    const lastItem = items[items.length - 1];
    return lastItem.user_id + 1;
  }

  function addItems(userId){
    const newItem = {
      "itemsArray": {
        "Clothing": [
          {
            "id": 1,
            "name": "hoodie"
          }
        ],
        "ClothingColor": [
          {
            "id": 1,
            "name": "3c4f5c"
          }
        ],
        "Eyebrows": [
          {
            "id": 1,
            "name": "default"
          }
        ],
        "Eyes": [
          {
            "id": 1,
            "name": "default"
          }
        ],
        "HairColor": [
          {
            "id": 1,
            "name": "000000"
          }
        ],
        "Mouth": [
          {
            "id": 1,
            "name": "default"
          }
        ],
        "SkinColor": [
          {
            "id": 1,
            "name": "f2d3b1"
          }
        ],
        "Top": [
          {
            "id": 1,
            "name": "shortFlat"
          }
        ]
      },
      "user_id": userId
    }
    const db = getDatabase();
    const newItemKey = newItemsKey();
    set(ref(db, `items/${newItemKey - 1}`), newItem);
  }
  const addItemToDB = async (userId, category, ShopItem) => {
    const db = getDatabase();
    const { id, name } = ShopItem;
    const itemsRef = ref(db, `items/${userId-1}/itemsArray/${category}`);
    const newItem = {
      id,
      name,
    };
   
    const snapshot = await get(itemsRef);
    let latestItemId = 0;
    if (snapshot.exists()) {
      const itemsData = snapshot.val();
      const itemIds = Object.keys(itemsData).map(Number);
      latestItemId = Math.max(...itemIds);
    }

    const newItemId = latestItemId + 1;

    const newItemRef = ref(db, `items/${userId-1}/itemsArray/${category}/${newItemId}`);
    await set(newItemRef, newItem);
  };


  return { items, getItemsByUserId, addItems,addItemToDB  };

}

export default dbConnectionItems;
