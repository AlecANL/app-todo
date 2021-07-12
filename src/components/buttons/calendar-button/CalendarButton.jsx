import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { showModalCalendar } from 'redux/ui/ui.actions';
import './calendar-button.css';

function CalendarButton({ day, month }) {
  const { current_task_date: date } = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  function handleShowCalendar() {
    dispatch(showModalCalendar(true));
  }
  return (
    <button className="calendarButton" onClick={handleShowCalendar}>
      <i className="icon-calendar"></i>
      <span className="ellipsis">
        {!date ? 'Without Date' : `${date?.day} ${date?.month}`}
      </span>
    </button>
  );
}

export default CalendarButton;
