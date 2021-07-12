import Modal from 'components/modal-wrapper/ModalWrapper';
import { useStaticCalendar } from 'hooks/useStaticCalendar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { unSetDate } from 'redux/tasks/task.actions';
import { showModalCalendar } from 'redux/ui/ui.actions';
import CalendarMonth from '../calendar-month/CalendarMonth';
import './calendar-modal.css';

function CalendarModal({ isShowModal }) {
  const dispatch = useDispatch();
  const { buildCalendar } = useStaticCalendar();
  const { current_task_date: date } = useSelector(state => state.tasks);

  const calendarCollection = buildCalendar({
    startCalendar: 'start_current_month',
  });

  function handleCloseModal() {
    dispatch(showModalCalendar(false));
  }

  function handleSetDate() {
    if (!date) return console.warn('please enter a valid date');
    dispatch(showModalCalendar(false));
  }

  function handleUnsetDate() {
    dispatch(unSetDate());
    dispatch(showModalCalendar(false));
  }

  return (
    <Modal isShowModal={isShowModal}>
      <div className="calendarModal">
        <div className="modal-header">
          <span>Set Task</span>
          <button className="btn-calendar" onClick={handleCloseModal}>
            <i className="icon-closeSquare "></i>
          </button>
        </div>
        <div className="calendar-content">
          {calendarCollection.map((calendar, i) => (
            <CalendarMonth
              key={i}
              days={calendar.days}
              month={calendar.month}
              year={calendar.year}
              monthPosition={calendar.monthPosition}
            />
          ))}
        </div>
        <div className="calendar-actions">
          <button className="btn-blue" onClick={handleSetDate}>
            Save
          </button>
          <button className="btn-outline-blue" onClick={handleUnsetDate}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CalendarModal;
