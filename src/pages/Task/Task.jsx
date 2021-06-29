import Header from 'components/header/Header';
import IconArrowLeft from 'assets/arrow-left.svg';
import IsEmptyScreen from 'assets/empty-screen.png';
import Wrapper from 'components/wrapper/Wrapper';
import EmptyCollections from 'components/empty-collections/EmptyCollections';
import './task.css';
import TaskList from 'components/tasks/task-list/TaskList';
import ModalSubTask from 'components/modal-subTask/ModalSubTask';
// import ModalForm from 'components/modal-form/ModalForm';
// import ModalDetail from 'components/modal-detail/ModalDetail';
// import { useCalendar } from 'hooks/useStaticCalendar';
// import CalendarModal from 'components/calendar/calendar-modal/CalendarModal';

const fakeData = [
  {
    id: 1,
    name: 'to do my work',
    date: new Date().getTime(),
    subTasks: [],
  },
  {
    id: 2,
    name: 'Walk to my job',
    date: new Date().getTime(),
    subTasks: [],
  },
];
const emptyScreenData = {
  image: IsEmptyScreen,
  message: {
    title: 'Do you Organized your projects',
    subTitle: 'Group all work by goal or area your life',
  },
};

function Task() {
  return (
    <>
      <Header title="person" icon={IconArrowLeft} />
      <main className="task">
        <Wrapper>
          <div className="task-content">
            {!fakeData && fakeData.length < 0 && (
              <EmptyCollections {...emptyScreenData} />
            )}
            {fakeData && fakeData.length > 0 && (
              <TaskList collections={fakeData} />
            )}
            {/* <ModalForm /> */}
            {/* <ModalDetail /> */}
            {/* <CalendarModal /> */}
            <ModalSubTask />
          </div>
        </Wrapper>
      </main>
    </>
  );
}

export default Task;
