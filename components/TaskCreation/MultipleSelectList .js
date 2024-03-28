import React, { useState, useEffect } from 'react';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { getDatabase, ref, get } from "firebase/database";
import firebase from './firebaseConfig';
import dbConnectionEnviorments from '../DataBase/dbConnectionEnviorments';


const MySelectComponent = ({ setSelected, userId }) => {

  const db = getDatabase(firebase);
  const useUserData = () => {
    const [userData, setUserData] = useState([]);
    const { environments, getEnviormentByAdminId } = dbConnectionEnviorments();
    const enviorment = getEnviormentByAdminId(userId);
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          if (enviorment && enviorment.id) { // Check if enviorment and its id are defined
            const snapshot = await get(ref(db, 'users'));
            const userData = snapshot.val();

            if (userData) {
              // Filter users based on Enviorment_id matching the environment id
              const filteredUsers = Object.entries(userData)
                .filter(([id, user]) => user.Enviorment_id === enviorment.id)
                .map(([id, user]) => ({ id, ...user }));

              setUserData(filteredUsers);
            } else {
              console.log('No user data found.');
            }
          } else {
            console.log('Environment or its ID is undefined.');
          }
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

      fetchUserData();
    }, [userId, enviorment]);

    return userData;
  };

  const userData = useUserData();
  const firstNames = userData.map(user => ({ key: user.id, value: `${user.first_name} ${user.last_name} (${user.id})` }));
  const boxStyles = {
    backgroundColor: '#fff',
    borderStyle: 'dashed',
    borderColor: '#8DE1D5',
    borderWidth: 3,
    borderRadius: 10,
    width: '100%',
    marginBottom: '10%',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  };
  return (
    <MultipleSelectList
      setSelected={val => setSelected(val)}
      data={firstNames}
      label="Assign To"
      placeholder='Assign To'
      boxStyles={boxStyles}
      inputStyles={{ fontSize: 18 }}
    />
  );
};

export { MySelectComponent };
