// const firebaseConfig = {
//     apiKey: "AIzaSyAEhAIE9OBu4EIpaW2Xff-wuzNVYrx6Iow",
//     authDomain: "familyquest-43f50.firebaseapp.com",
//     databaseURL: "https://familyquest-43f50-default-rtdb.firebaseio.com",
//     projectId: "familyquest-43f50",
//     storageBucket: "familyquest-43f50.appspot.com",
//     messagingSenderId: "435404741742",
//     appId: "1:435404741742:web:e964f4ae7470e38fa11a7f",
//     measurementId: "G-VG2Z4F1K75"
//   };
  
//   export default firebaseConfig;
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDER_ID, APP_ID, MEASUREMENT_ID } from '@env'; 

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGINGSENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};