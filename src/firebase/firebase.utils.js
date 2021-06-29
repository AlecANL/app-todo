import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAyiS6_cXESGmbrYqsLiaBluhWrZqlbrsE',
  authDomain: 'tasks-app-2a65a.firebaseapp.com',
  projectId: 'tasks-app-2a65a',
  storageBucket: 'tasks-app-2a65a.appspot.com',
  messagingSenderId: '297934129018',
  appId: '1:297934129018:web:f32ccacdada3daa952b8c3',
  measurementId: 'G-6640XWZ9GX',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firebase, firestore, auth };
