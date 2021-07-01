import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Header from 'components/header/Header';
import IsEmptyScreen from 'assets/empty-screen.png';
import Wrapper from 'components/wrapper/Wrapper';
import EmptyCollections from 'components/empty-collections/EmptyCollections';
import TaskList from 'components/tasks/task-list/TaskList';
import ModalSubTask from 'components/modal-subTask/ModalSubTask';
import ModalForm from 'components/modal-form/ModalForm';
import ModalDetail from 'components/modal-detail/ModalDetail';
import CalendarModal from 'components/calendar/calendar-modal/CalendarModal';
import FloatButton from 'components/float-button/FloatButton';
import { showModalAddTask } from 'redux/ui/ui.actions';
import IconArrowLeft from 'assets/arrow-left.svg';
import './task.css';

// const fakeData = [
//   {
//     id: 1,
//     name: 'to do my work',
//     date: new Date().getTime(),
//     subTasks: [],
//   },
//   {
//     id: 2,
//     name: 'Walk to my job',
//     date: new Date().getTime(),
//     subTasks: [],
//   },
// ];
const emptyScreenData = {
  image: IsEmptyScreen,
  message: {
    title: 'Do you Organized your projects',
    subTitle: 'Group all work by goal or area your life',
  },
};

function Task() {
  const dispatch = useDispatch();
  const stateModals = useSelector(state => state.ui);
  const { collections } = useSelector(state => state.tasks);

  function handleShowModalAddTask() {
    dispatch(showModalAddTask(true));
  }

  return (
    <>
      <Header title={stateModals.currentSection} icon={IconArrowLeft} />
      <main className="task">
        <Wrapper>
          <div className="task-content">
            {collections.length <= 0 && (
              <EmptyCollections {...emptyScreenData} />
            )}
            {collections.length > 0 && <TaskList collections={collections} />}
            <ModalForm isShowModal={stateModals.showModalAddTask} />
            <ModalDetail isShowModal={stateModals.showModalDetail} />
            <ModalSubTask isShowModal={stateModals.showModalSubTask} />
            <CalendarModal isShowModal={stateModals.showModalCalendar} />
            <FloatButton isShowModal={handleShowModalAddTask} />
          </div>
        </Wrapper>
      </main>
    </>
  );
}

export default Task;
