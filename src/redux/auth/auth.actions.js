import Swal from 'sweetalert2';

import {
  createUser,
  singInWithEmailAndPassword,
  singInWithGoogle,
} from 'firebase/firebase.utils';
import { authTypes } from './auth.types';

export function login({ uid, displayName }) {
  return {
    type: authTypes.LOGIN,
    payload: {
      id: uid,
      name: displayName,
    },
  };
}

export function loginWithGoogle() {
  return async dispatch => {
    const userCredential = await singInWithGoogle();
    const { user } = userCredential;
    const singInUser = login(user);
    dispatch(singInUser);
  };
}

export function registerUserWithEmailAndPassword(userCredentials) {
  return async dispatch => {
    try {
      const { user } = await createUser(userCredentials);
      const singleUser = login(user);
      dispatch(singleUser);
    } catch (error) {
      console.warn(error);
    }
  };
}

export function loginWithEmailAndPassword(userCredentials) {
  return async dispatch => {
    try {
      const { user } = await singInWithEmailAndPassword(userCredentials);
      const userLogged = login({
        uid: user.uid,
        displayName: user.displayName,
      });
      dispatch(userLogged);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error?.message,
      });
      console.warn(error);
    }
  };
}
