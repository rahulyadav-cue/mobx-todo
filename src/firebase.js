import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBwaBg4_ovfplE4ir3wgb22kmgP4NpqwoM",
    authDomain: "mobx-todo-mbx.firebaseapp.com",
    databaseURL: "https://mobx-todo-mbx.firebaseio.com",
    projectId: "mobx-todo-mbx",
    storageBucket: "mobx-todo-mbx.appspot.com",
    messagingSenderId: "859762618438",
    appId: "1:859762618438:web:87d4cadbb68bb1db5cda47",
    measurementId: "G-5M43NY3719"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;