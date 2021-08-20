import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAt8-NTi-D2bjQxbbixWdw6Dh5Gt9jkMwg",
    authDomain: "linkedin-clone-b873a.firebaseapp.com",
    projectId: "linkedin-clone-b873a",
    storageBucket: "linkedin-clone-b873a.appspot.com",
    messagingSenderId: "997371834030",
    appId: "1:997371834030:web:bf74d52ea0b2879db4873f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };