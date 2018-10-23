import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDZsbfaCH6Bq4jWH8lmh9hYP4TulKH30WQ",
    authDomain: "dashboard-7aba3.firebaseapp.com",
    databaseURL: "https://dashboard-7aba3.firebaseio.com",
    projectId: "dashboard-7aba3",
    storageBucket: "dashboard-7aba3.appspot.com",
    messagingSenderId: "545797417842"
  };
  firebase.initializeApp(config);
  
const storage = firebase.storage();

export {
    storage, firebase as default
}
