import { useContext } from 'react';
import TodoContext from '../../../contexts/TodoContext/TodoContext';
import { CalendarItem } from '../calendar-item/CalendarItem';
import './caledar-wrapper.css';

const weekdays = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo',
];

export function CalendarWrapper() {
  const { showCalendar, setShowCalendar, setDate } = useContext(TodoContext);

  function handleCloseCalendar() {
    setShowCalendar(false);
  }

  function handleResetCalendar() {
    setDate({
      day: null,
      year: null,
      month: null,
    });
    // handleCloseCalendar();
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  function buildCalendarIem() {
    const calendarItem = [];
    for (let i = month; i <= 11; i++) {
      const firstDayMonth = new Date(year, i, 1);
      const daysInMonth = new Date(year, i + 1, 0).getDate();
      const dateString = firstDayMonth.toLocaleDateString('es-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const currentMonth = dateString.split(' ')[3];
      const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
      const props = {
        daysInMonth,
        paddingDays,
        currentMonth,
        year,
      };
      calendarItem.push(<CalendarItem key={i} {...props} />);
    }
    return calendarItem;
  }
  return (
    <div className={`calendar-wrapper ${showCalendar && 'is-active'}`}>
      <div className="layer"></div>
      <section className="calendar-content">
        <div className="calendar-contentHeading">
          <span>Programar tarea</span>
          <button className="buttonIcon" onClick={handleCloseCalendar}>
            <i className="icon-closeSquare" aria-hidden="true"></i>
          </button>
        </div>
        <div className="calendly">{buildCalendarIem()}</div>
        <div className="buttons">
          <button className="btn is-blue" onClick={handleCloseCalendar}>
            Guardar
          </button>
          <button className="btn is-white" onClick={handleResetCalendar}>
            Cancelar
          </button>
        </div>
      </section>
    </div>
  );
}
