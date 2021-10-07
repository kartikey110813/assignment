import firebase from 'firebase';
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyDMvYxkHAmlYfBASUnpjGbOLFWYOV8p1dM",
    authDomain: "utilize-assignment-35fcd.firebaseapp.com",
    projectId: "utilize-assignment-35fcd",
    storageBucket: "utilize-assignment-35fcd.appspot.com",
    messagingSenderId: "713479448372",
    appId: "1:713479448372:web:936701c9952ca26cc12761"
});

// var auth = firebase.auth();
var db = firebase.firestore();

export { firebase ,db};