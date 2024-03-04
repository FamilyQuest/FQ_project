import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, get, set, push } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID } from '@env';

const dbConnectionUsersAchivements = () => {
  const [usersAchivements, setUsersAchivements] = useState([]);

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

    const usersAchivementsRef = ref(db, 'UsersAchivements/');
    get(usersAchivementsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersAchivementsData = snapshot.val();
          const usersAchivementsArray = Object.keys(usersAchivementsData).map((key) => ({
            id: key,
            ...usersAchivementsData[key],
          }));
          setUsersAchivements(usersAchivementsArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getUserAchivementsByUserId(userId) {
    const userIdAchivements = usersAchivements.filter(achivement => achivement.user_id === userId);
    if (userIdAchivements.length === 0) {
      return [];
    }
    return userIdAchivements[0]['achivementsArray'];
  }

  function getStatusByUserId(userId, achivementId) {
    const userAchivements = getUserAchivementsByUserId(userId);
    const userAchivement = userAchivements.find(achivement => achivement.id === achivementId);
    if (userAchivement) {
      return userAchivement.status;
    }
    return false;
  }

  function incrementUserAchivement(userId, achivementId, maxCount) {
    const status = getStatusByUserId(userId, achivementId);
    const userAchivements = getUserAchivementsByUserId(userId);
    let userAchivement = userAchivements.find(achivement => achivement.id === achivementId);
    if (userAchivement && !status) {
      if (userAchivement.count < maxCount) {
        userAchivement.count = userAchivement.count + 1;
      } else {
        userAchivement.status = true;
      }
    }
    console.log('here: ', userAchivement)
    if (userAchivement) {
      const db = getDatabase();
      console.log(achivementId);
      console.log('paht: ', `UsersAchivements/${userId - 1}`)
      const usersAchivementsRef = ref(db, `UsersAchivements/${userId - 1}/achivementsArray/${achivementId - 1}`);
      set(usersAchivementsRef, {
        'achivement_id': userAchivement.achivement_id,
        'count': userAchivement.count,
        'id': userAchivement.id,
        'status': status,
      });
    }
  }

  const newUsersAchivementsKey = () => {
    const lastAchivement = usersAchivements[usersAchivements.length - 1];
    return lastAchivement.id + 1;
  }

  const newUsersAchivements = (userId) => {
    const newUsersAchivement = {
      "achivementsArray": [
        {
          "achivement_id": 1,
          "count": 0,
          "id": 1,
          "status": false
        },
        {
          "achivement_id": 2,
          "count": 0,
          "id": 2,
          "status": false
        },
        {
          "achivement_id": 3,
          "count": 0,
          "id": 3,
          "status": false
        },
        {
          "achivement_id": 4,
          "count": 0,
          "id": 4,
          "status": false
        }
      ],
      "user_id": userId
    }

    const db = getDatabase();
    const usersAchivementsRef = ref(db, `UsersAchivements/${userId - 1}/`);
    set(usersAchivementsRef, newUsersAchivement);
  }

  function countStatusTrue(userId) {
    const userAchivements = getUserAchivementsByUserId(userId);
    return userAchivements.filter(achivement => achivement.status === true).length;
  }


  return { usersAchivements, getUserAchivementsByUserId, incrementUserAchivement, newUsersAchivements, newUsersAchivementsKey, countStatusTrue };
}

export default dbConnectionUsersAchivements;
