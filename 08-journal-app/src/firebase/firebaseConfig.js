import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUj3hZSGQTCKwOiJGBH89t5uAgA7SIImQ",
    authDomain: "react-app-curso-f7323.firebaseapp.com",
    databaseURL: "https://react-app-curso-f7323.firebaseio.com",
    projectId: "react-app-curso-f7323",
    storageBucket: "react-app-curso-f7323.appspot.com",
    messagingSenderId: "248021682448",
    appId: "1:248021682448:web:33fa1850e32c8553653d95",
};

firebase.initializeApp(firebaseConfig);

const db                    = firebase.firestore();
const googleAuthProvider    = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}