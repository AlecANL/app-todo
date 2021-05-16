import { CalendarItem } from '../calendar-item/CalendarItem';
import { useCalendar } from '../../../hooks/useCalendar';
import './caledar-wrapper.css';

export function CalendarWrapper() {
  const {
    handleCloseCalendar,
    handleResetCalendar,
    showCalendar,
    handleCurrentDate,
    currenMonth,
  } = useCalendar();

  function buildCalendarItem() {
    const calendarItem = [];
    for (let i = currenMonth; i <= 11; i++) {
      const props = handleCurrentDate(i);
      calendarItem.push(<CalendarItem key={i} {...props} />);
    }
    return calendarItem;
  }
  return (
    <div className={`calendar-wrapper  ${showCalendar && 'is-active'}`}>
      <div className="layer"></div>
      <section className="calendar-content">
        <div className="calendar-contentHeading">
          <span>Programar tarea</span>
          <button className="buttonIcon" onClick={handleCloseCalendar}>
            <i className="icon-closeSquare" aria-hidden="true"></i>
          </button>
        </div>
        <div className="calendly">{buildCalendarItem()}</div>
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
