// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { showModalCalendar } from 'redux/ui/ui.actions';
import './calendar-button.css';

function CalendarButton({ day, month }) {
  const dispatch = useDispatch();
  function handleShowCalendar() {
    dispatch(showModalCalendar(true));
  }
  return (
    <button className="calendarButton" onClick={handleShowCalendar}>
      <i className="icon-calendar"></i>
      <span className="ellipsis">
        {!day || !month ? 'Without Date' : `${day} ${month}`}
      </span>
    </button>
  );
}

export default CalendarButton;
