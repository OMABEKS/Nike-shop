import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAvYI6QdDCXMRrG7h_xvXvipoFF0ybDApo",
    authDomain: "oma-auth-93502.firebaseapp.com",
    projectId: "oma-auth-93502",
    storageBucket: "oma-auth-93502.appspot.com",
    messagingSenderId: "297204932874",
    appId: "1:297204932874:web:77985f2f01f47d1a7c1af3"
  };




  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;

