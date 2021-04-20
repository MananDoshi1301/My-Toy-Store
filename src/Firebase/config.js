import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDzJ6DrHvoM7XmtlX2W5iD9X162uMySwOA",
  authDomain: "my-toy-store-4e5e8.firebaseapp.com",
  projectId: "my-toy-store-4e5e8",
  storageBucket: "my-toy-store-4e5e8.appspot.com",
  messagingSenderId: "905129563250",
  appId: "1:905129563250:web:51bb90f345749a0d72deeb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};