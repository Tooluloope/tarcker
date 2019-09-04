import firebase from 'firebase';
import auth from 'firebase/auth';
import firestore from 'firebase/firestore';


const config = {
    apiKey: "AIzaSyC_q24ZZR2arRfWOMO7T4-opG2XuhnMqhY",
    authDomain: "tracker-bf078.firebaseapp.com",
    databaseURL: "https://tracker-bf078.firebaseio.com",
    projectId: "tracker-bf078",
    storageBucket: "",
    messagingSenderId: "630626812771",
    appId: "1:630626812771:web:b49cff0e1297da7c"
  };
  // Initialize Firebase
  firebase.initializeApp(config);