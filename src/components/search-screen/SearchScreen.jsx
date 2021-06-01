import { useContext, useState } from 'react';
import { TodoBanner } from '../todo-banner/TodoBanner';
import { Header } from '../header/Header';
import TodoContext from '../../contexts/TodoContext/TodoContext';
import screen from '../../assets/screen-2.png';
import './search-screen.css';
function SearchScreen() {
  const [inputValue, setInputValue] = useState('');
  const [descriptionState, setDescriptionState] = useState({
    screen,
    title: 'Realiza una búsqueda',
    subTitle: 'Encuentra la tarea en la cual deseas trabajar.',
  });
  const [showBanner, setShowBanner] = useState({
    isResultEmpty: true,
    taskSearchLength: 0,
  });
  const {
    store: { tasks },
  } = useContext(TodoContext);

  function handleSubmitForm(e) {
    e.preventDefault();
    const taskFinded = findTask(inputValue);
    console.log(taskFinded);
  }
  function handleInputValue(e) {
    const value = e.target.value;
    setInputValue(value);
  }
  function findTask(taskSearched) {
    const taskSearch = tasks.filter(task =>
      task.taskName.includes(taskSearched)
    );

    if (taskSearch.length > 0) {
      setShowBanner({
        isResultEmpty: false,
        taskSearchLength: taskSearch.length,
      });
      console.log(taskSearch);
      console.log(showBanner);
      return taskSearch;
    } else if (taskSearch.length <= 0) {
      const data = tasks
        .map(el => {
          if (el.subTasks === undefined) {
            // setDescriptionState({
            //   ...descriptionState,
            //   title: `No hay resultados para "${taskSearched}"`,
            //   subTitle: 'Intenta realizando otra busqueda',
            // });
            return [];
          } else {
            return el.subTasks;
          }
        })
        .reduce((total, amount) => {
          return total.concat(amount);
        }, [])
        .filter(task => task.subTaskName.includes(taskSearched));
      if (data.length > 0) {
        setShowBanner({
          isResultEmpty: false,
          taskSearchLength: data.length,
        });
      } else {
        setShowBanner({
          isResultEmpty: true,
          taskSearchLength: data.length,
        });
        setDescriptionState({
          ...descriptionState,
          title: `No hay resultados para "${taskSearched}"`,
          subTitle: 'Intenta realizando otra busqueda',
        });
      }
      return data;
    } else {
      return undefined;
    }
  }
  return (
    <>
      <Header>
        <form onSubmit={handleSubmitForm}>
          <input type="text" value={inputValue} onChange={handleInputValue} />
        </form>
      </Header>
      {showBanner.isResultEmpty && showBanner.taskSearchLength <= 0 && (
        <TodoBanner {...descriptionState} />
      )}
    </>
  );
}

export default SearchScreen;
