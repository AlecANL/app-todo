import './calendar-button.css';

function CalendarButton({ day, month }) {
  return (
    <button className="calendarButton">
      <i className="icon-calendar"></i>
      <span className="ellipsis">
        {!day || !month ? 'Without Date' : `${day} ${month}`}
      </span>
    </button>
  );
}

export default CalendarButton;
