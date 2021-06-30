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
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

function singInWithGoogle() {
  return auth.signInWithPopup(googleAuthProvider);
}

async function logOut() {
  return await auth.signOut();
}

async function singInWithEmailAndPassword(userCredential) {
  const { email, password } = userCredential;
  const userLogged = await auth.signInWithEmailAndPassword(email, password);
  return userLogged;
}

async function loadAllTasks(id) {
  const tasksSnap = await firestore.collection(`${id}/app/tasks`).get();
  const tasks = [];
  tasksSnap.forEach(task => {
    tasks.push({
      id: task.id,
      ...task.data(),
    });
  });
  console.log(tasks);
  return tasks;
}

async function createUser(userCredentials) {
  const { email, password, name } = userCredentials;
  const createdUser = await auth.createUserWithEmailAndPassword(
    email,
    password
  );
  await createdUser.user.updateProfile({
    displayName: name,
  });

  return createdUser;
}

export {
  firebase,
  firestore,
  auth,
  loadAllTasks,
  singInWithGoogle,
  singInWithEmailAndPassword,
  logOut,
  createUser,
};
