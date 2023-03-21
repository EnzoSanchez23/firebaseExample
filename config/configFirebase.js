// Import the functions you need from the SDKs you need
import Firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkvQl6zBXq0AcHCx1cZeszxX8A0vguA4g",
  authDomain: "projeto-fei.firebaseapp.com",
  databaseURL: "https://projeto-fei-default-rtdb.firebaseio.com",
  projectId: "projeto-fei",
  storageBucket: "projeto-fei.appspot.com",
  messagingSenderId: "127926666655",
  appId: "1:127926666655:web:63e6adc3d63b606014a9aa",
};

// Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const storage = app.storage();
export const firestore = app.firestore();
export const auth = app.auth();