import React, { useState, useEffect } from 'react';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAEhAIE9OBu4EIpaW2Xff-wuzNVYrx6Iow",
  authDomain: "familyquest-43f50.firebaseapp.com",
  databaseURL: "https://familyquest-43f50-default-rtdb.firebaseio.com",
  projectId: "familyquest-43f50",
  storageBucket: "familyquest-43f50.appspot.com",
  messagingSenderId: "435404741742",
  appId: "1:435404741742:web:e964f4ae7470e38fa11a7f",
  measurementId: "G-VG2Z4F1K75"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const useUserData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const snapshot = await get(ref(db, 'users'));
        const userData = snapshot.val();
        const userDataArray = Object.entries(userData).map(([userId, userData]) => ({ userId, ...userData }));
        setUserData(userDataArray);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchUserData();
  }, []);

  return userData;
};

const MySelectComponent = () => {
  const [selected, setSelected] = useState([]);
  const userData = useUserData();

  const firstNames = userData.map(user => ({ key: user.userId, value: user.first_name }));

  const boxStyles = {
    backgroundColor: '#fff',
    borderStyle: 'dashed',
    borderColor: '#8DE1D5',
    borderWidth: 3,
    borderRadius: 10,
    width:'100%',
    marginBottom:'10%',
  };

  return (
    <MultipleSelectList
      setSelected={val => setSelected(val)}
      data={firstNames}
      save="value"
      label="Assign To"
      placeholder='Assign To'
      boxStyles={boxStyles}
      inputStyles={{fontSize:18}}
    />
  );
};

export { MySelectComponent};