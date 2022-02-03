import firebase from "firebase/compat/app";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAIWXV9mxZPD3nQdkbklOUTaDDS1cjobjs",
  authDomain: "smart-cooker-file-store.firebaseapp.com",
  projectId: "smart-cooker-file-store",
  storageBucket: "smart-cooker-file-store.appspot.com",
  messagingSenderId: "240613267371",
  appId: "1:240613267371:web:20d5f3cf8bc964a61364ee",
  measurementId: "G-DB49YDTJ2Q"
  };
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export  {storage, firebase as default};