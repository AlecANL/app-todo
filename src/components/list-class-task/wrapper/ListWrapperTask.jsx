import React from 'react';
import { ListTask } from '../list/ListTask';
import './ListWrapperTask';

export function ListWrapperTask({ history }) {
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
    <section>
      {dataTasks.map((typetask, i) => (
        <ListTask key={i} id={i} {...typetask} history={history} />
      ))}
    </section>
  );
}
