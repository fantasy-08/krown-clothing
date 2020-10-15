import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCIGvmn6eYJ5Z_ASgfM-XvBIXXxAI2T3wU",
    authDomain: "krown-db-b778b.firebaseapp.com",
    databaseURL: "https://krown-db-b778b.firebaseio.com",
    projectId: "krown-db-b778b",
    storageBucket: "krown-db-b778b.appspot.com",
    messagingSenderId: "119616552739",
    appId: "1:119616552739:web:1bb79da2c4979c5d5c5696",
    measurementId: "G-SZ7SJF8QC5"
  };

  export const createUserProfileDocument= async (userAuth,...additionalData)=>{
    if(!userAuth) return ;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot= await userRef.get();

    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt =new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        }catch(error){
          console.log(error);
        }
    }
    return userRef;    
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    promt : 'select_account'
  });

  export const signInWithGoogle = () => 
  auth.signInWithPopup(provider);

export default firebase;
