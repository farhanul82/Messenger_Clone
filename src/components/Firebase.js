import firebase from 'firebase'

const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyBYT7lBR2AH9KCe2d86yPKV_oUMlkMoxjU",
    authDomain: "messenger-clone-49893.firebaseapp.com",
    databaseURL: "https://messenger-clone-49893.firebaseio.com",
    projectId: "messenger-clone-49893",
    storageBucket: "messenger-clone-49893.appspot.com",
    messagingSenderId: "831101368093",
    appId: "1:831101368093:web:e80bfb3989402686cfd3f4"
});

const db = firebaseApp.firestore();

export { db };

