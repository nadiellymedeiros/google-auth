import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2q0S4GL2-6UxbCiRxIF0XYeLCxJyHOBE",
  authDomain: "auth-dd83a.firebaseapp.com",
  projectId: "auth-dd83a",
  storageBucket: "auth-dd83a.appspot.com",
  messagingSenderId: "535010585455",
  appId: "1:535010585455:web:420a00084a6c05117dd69a",
  measurementId: "G-YFZFYGMGZK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
