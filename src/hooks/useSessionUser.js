import { auth } from 'firebase/firebase.utils';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth.actions';
import { loadTasks } from 'redux/tasks/task.actions';
import { hasCollectionAction } from 'redux/ui/ui.actions';

export function useSessionUser(authHelper = auth) {
  const dispatch = useDispatch();
  const [isLoadingPage, setLoadingPage] = useState(true);
  const [isUserLogged, setUserLogged] = useState(false);

  useEffect(() => {
    authHelper.onAuthStateChanged(user => {
      if (user?.uid) {
        dispatch(hasCollectionAction(true));
        dispatch(loadTasks(user.uid));
        dispatch(login(user));
      }
    });
  }, [dispatch, authHelper]);

  useEffect(() => {
    authHelper.onAuthStateChanged(user => {
      if (user?.uid) {
        setUserLogged(true);
        setLoadingPage(false);
      } else {
        setUserLogged(false);
        setLoadingPage(false);
      }
    });
  }, [authHelper]);
  return {
    isLoadingPage,
    isUserLogged,
  };
}
