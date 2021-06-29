import CalendarButton from 'components/buttons/calendar-button/CalendarButton';
import Modal from 'components/modal-wrapper/ModalWrapper';
import SubTaskList from 'components/subTasks/subTasks-list/SubTaskList';
import TaskItem from 'components/tasks/task-item/TaskItem';
import './task-detail.css';

const fakeCollection = [
  {
    id: 10,
    name: 'pokemon',
  },
  {
    id: 11,
    name: 'pokemon 2',
  },
  {
    id: 12,
    name: 'pokemon 2',
  },
  {
    id: 13,
    name: 'pokemon 2',
  },
  {
    id: 5,
    name: 'pokemon 2',
  },
  {
    id: 6,
    name: 'pokemon 2',
  },
];

function ModalDetail() {
  return (
    <Modal>
      <div className="modalDetail">
        <div className="modal-header">
          <div className="typeTask">
            <div className="dot"></div>
            <span>name</span>
          </div>
          <button className="close-button">
            <i className="icon-closeSquare"></i>
          </button>
        </div>
        <div className="task">
          <TaskItem name="hello world" id={25} />
        </div>
        <CalendarButton />
        <div className="modal-subTasks">
          <h4>SubTasks</h4>
          <SubTaskList collection={fakeCollection} />
          <button className="subTask-button">+ add new SubTask</button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalDetail;
