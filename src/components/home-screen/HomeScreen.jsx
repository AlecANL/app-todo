import React from 'react';
import { Header } from '../header/Header';
import TaskMenu from '../task-menu/TaskMenu';
import MenuSectionTask from '../section-task/menu-section-task/MenuSectionTask';
import logo from '../../assets/logo.svg';

function HomeScreen({ history }) {
  return (
    <section>
      <Header title="Lista de tareas" logo={logo} />
      <TaskMenu />
      <MenuSectionTask history={history} />
    </section>
  );
}
export default HomeScreen;
