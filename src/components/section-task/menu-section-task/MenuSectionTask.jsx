import React from 'react';
import { ListTask } from '../list/ListTask';
import './menu-section-task.css';

function MenuSectionTask({ history }) {
  const dataTasks = [
    {
      title: 'Proyectos',
      typeTasks: ['personal', 'trabajo', 'recados', 'compras'],
    },
    {
      title: 'Escuela',
      typeTasks: ['ingles', 'programacion', 'matematica'],
    },
  ];

  return (
    <section className="menuSectionTask">
      <div className="wrapper">
        <div className="menuSectionTask-content">
          {dataTasks.map((typetask, i) => (
            <ListTask key={i} id={i} {...typetask} history={history} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSectionTask;
