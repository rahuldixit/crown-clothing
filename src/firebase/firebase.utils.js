import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCO7guYB3rmfyDCtjgoY7RR6OQQjTQUmJk",
    authDomain: "crown-clothing-rahul-dixit.firebaseapp.com",
    projectId: "crown-clothing-rahul-dixit",
    storageBucket: "crown-clothing-rahul-dixit.appspot.com",
    messagingSenderId: "310123738412",
    appId: "1:310123738412:web:1983720d2dc224f1262889",
    measurementId: "G-LP7RW50KTF"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  //export default firebase;