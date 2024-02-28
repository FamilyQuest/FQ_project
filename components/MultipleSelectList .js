import React, { useState, useEffect } from 'react';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, get } from "firebase/database";
import firebaseConfig from './firebaseConfig';
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const useUserData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const snapshot = await get(ref(db, 'users'));
        const userData = snapshot.val();
        const userDataArray = Object.entries(userData).map(([id, userData]) => ({ id, ...userData }));
        setUserData(userDataArray);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchUserData();
  }, []);

  return userData;
};

const MySelectComponent = ({ setSelected }) => {
  
  const userData = useUserData();
  const firstNames = userData.map(user => ({ key: user.id, value: `${user.first_name} (${user.id})` }));
  // const useIDs = userData.map(user => ({ key: user.id, value: `(${user.id})` }));
  const boxStyles = {
    backgroundColor: '#fff',
    borderStyle: 'dashed',
    borderColor: '#8DE1D5',
    borderWidth: 3,
    borderRadius: 10,
    width: '100%',
    marginBottom: '10%',
  };
  return (
    <MultipleSelectList
      setSelected={val => setSelected(val)}
      data={firstNames}
      // save="value"
      label="Assign To"
      placeholder='Assign To'
      boxStyles={boxStyles}
      inputStyles={{fontSize: 18}}
    />
  );
};

export { MySelectComponent};
