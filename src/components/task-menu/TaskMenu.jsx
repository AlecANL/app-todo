import React from 'react';
import { ViewTask } from '../view-task/ViewTask';
import './task-menu.css';

function TaskMenu() {
  const listData = [
    {
      icon: 'icon-document',
      title: 'Bandeja de entrada',
      color: 'is-blue',
    },
    {
      icon: 'icon-calendar-v2',
      title: 'Hoy',
      color: 'is-green',
    },
    {
      icon: 'icon-calendar',
      title: 'Próximo',
      color: 'is-purpple',
    },
  ];
  return (
    <section className="taskMenu">
      <div className="wrapper">
        <div className="taskMenu-content">
          {listData.map((taskView, i) => (
            <ViewTask {...taskView} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TaskMenu;
