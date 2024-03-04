import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, get, set } from 'firebase/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMETN_ID } from '@env';

const dbConnectionAchivements = () => {
  const [achivements, setAchivements] = useState([]);

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

    const achivementsRef = ref(db, 'Achivements/');
    get(achivementsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const achivementsData = snapshot.val();
          const achivementsArray = Object.keys(achivementsData).map((key) => ({
            id: key,
            ...achivementsData[key],
          }));
          setAchivements(achivementsArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function countAchivements() {
    return achivements.length;
  }

  function countMaxByAchivementId(id){
    const achivement = achivements.find(achivement => achivement.id === id);
    if (achivement){
      return achivement.countMax;
    }
  }

  return { achivements, countAchivements, countMaxByAchivementId };
}

export default dbConnectionAchivements;
