import firebase from "firebase"
import "firebase/storage"
var firebaseConfig = {
    apiKey: "AIzaSyAokJXBHARatHdk7MDsvgbziKXs-i06s74",
    authDomain: "image-hoster-7fb43.firebaseapp.com",
    projectId: "image-hoster-7fb43",
    storageBucket: "image-hoster-7fb43.appspot.com",
    messagingSenderId: "248691421904",
    appId: "1:248691421904:web:b396990e2a79221a35a4d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage()

  export {storage, firebase as default}