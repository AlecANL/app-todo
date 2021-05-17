import { useReducer, useState, useEffect } from 'react';
import TodoContext from './TodoContext';
import TodoReducer from '../../reducers/TodoReducer/TodoReducer';

// const initialStore = {
//   // tasks: [
//   //   {
//   //     id: 1,
//   //     taskName: 'learn react js',
//   //     date: null,
//   //     taskArea: 'escuela',
//   //     taskBelongArea: 'programacion',
//   //     subTasks: [],
//   //   },
//   //   {
//   //     id: 2,
//   //     taskName: 'learn vue js',
//   //     taskArea: 'escuela',
//   //     taskBelongArea: 'programacion',
//   //     date: null,
//   //     subTasks: [],
//   //   },
//   //   {
//   //     id: 3,
//   //     taskName: 'build my professional portfolio',
//   //     taskArea: 'proyectos',
//   //     taskBelongArea: 'personal',
//   //     date: null,
//   //     subTasks: [],
//   //   },
//   //   {
//   //     id: 4,
//   //     taskName: 'create new feature to my awesome system',
//   //     taskArea: 'proyectos',
//   //     taskBelongArea: 'trabajo',
//   //     date: null,
//   //     subTasks: [],
//   //   },
//   //   {
//   //     id: 5,
//   //     taskName: 'buy new m1 mackbook',
//   //     taskArea: 'proyectos',
//   //     taskBelongArea: 'compras',
//   //     date: null,
//   //     subTasks: [],
//   //   },
//   // ],
//   // tasks: JSON.parse(localStorage.getItem('task-app')).tasks
//   //   ? JSON.parse(localStorage.getItem('task-app')).tasks
//   //   : [],
//   // tasks: [],
//   tasks: JSON.parse(localStorage.getItem('task-app')).tasks ?? {},
// };

const exampleStore = {
  tasks: [],
};

const initialStore =
  JSON.parse(localStorage.getItem('task-app')) ?? exampleStore;

function TodoStore({ children }) {
  const [show, setShowModal] = useState(false);
  const [taskModal, setTaskModal] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [openSubTaskModal, setOpenSubTaskModal] = useState(false);
  const [showModalActions, setShowModalActions] = useState(false);
  const [currentDate, setDate] = useState({
    day: null,
    month: null,
    year: null,
  });
  const [currentTask, setCurrentTask] = useState({});
  const [store, dispatch] = useReducer(TodoReducer, initialStore);

  useEffect(() => {
    localStorage.setItem('task-app', JSON.stringify(store));
  }, [store]);

  const data = {
    store,
    dispatch,
    show,
    setShowModal,
    taskModal,
    setTaskModal,
    showCalendar,
    setShowCalendar,
    setDate,
    currentDate,
    openSubTaskModal,
    setOpenSubTaskModal,
    currentTask,
    setCurrentTask,
    showModalActions,
    setShowModalActions,
  };

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
}

export default TodoStore;
