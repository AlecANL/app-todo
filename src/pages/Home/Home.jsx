import { useEffect } from 'react';

import Header from 'components/header/Header';
import IconHome from 'assets/logo.jpg';
import Entries from 'components/entries/Entries';
import GroupTask from 'components/group-task/GroupTask';
import FloatButton from 'components/float-button/FloatButton';
import { useDispatch } from 'react-redux';
import { loadTasks } from 'redux/tasks/task.actions';

function Home() {
  const dispatch = useDispatch();
  const id = 'ABDEF';

  useEffect(() => {
    dispatch(loadTasks(id));
  }, [dispatch, id]);

  return (
    <>
      <Header icon={IconHome} title="Task List" />
      <Entries />
      <GroupTask />
      <FloatButton />
    </>
  );
}

export default Home;
