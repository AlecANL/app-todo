import CalendarButton from 'components/buttons/calendar-button/CalendarButton';
import Modal from 'components/modal-wrapper/ModalWrapper';
import SubTaskList from 'components/subTasks/subTasks-list/SubTaskList';
// import TaskItem from 'components/tasks/task-item/TaskItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { showModalDetail, showModalSubTak } from 'redux/ui/ui.actions';
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
];

function ModalDetail({ isShowModal }) {
  const dispatch = useDispatch();
  const uiState = useSelector(state => state.ui);
  const taskState = useSelector(state => state.tasks);

  function handleCloseModal() {
    dispatch(showModalDetail(false));
  }

  function handleShowSubTaskModal() {
    dispatch(showModalSubTak(true));
  }

  return (
    <Modal isShowModal={isShowModal}>
      <div className="modalDetail">
        <div className="modal-header">
          <div className="typeTask">
            <div className="dot"></div>
            <span>{uiState.currentSection}</span>
          </div>
          <button className="close-button" onClick={handleCloseModal}>
            <i className="icon-closeSquare"></i>
          </button>
        </div>
        <div className="task">
          <span>{taskState?.activeTask?.name}</span>
        </div>
        <CalendarButton {...taskState?.activeTask?.date} />
        <div className="modal-subTasks">
          <h4>SubTasks</h4>
          <SubTaskList collection={fakeCollection} />
          <button className="subTask-button" onClick={handleShowSubTaskModal}>
            + add new SubTask
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalDetail;
