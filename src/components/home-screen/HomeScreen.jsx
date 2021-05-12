import React from 'react';
import { Header } from '../header/Header';
import TaskMenu from '../task-menu/TaskMenu';
import { ListWrapperTask } from '../list-class-task/wrapper/ListWrapperTask';
import logo from '../../assets/logo.svg';

function HomeScreen({ history }) {
  return (
    <section>
      <Header title="Lista de tareas" logo={logo} />
      <TaskMenu />
      <ListWrapperTask history={history} />
    </section>
  );
}
export default HomeScreen;
