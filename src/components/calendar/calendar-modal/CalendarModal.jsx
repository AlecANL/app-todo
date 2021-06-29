import Modal from 'components/modal-wrapper/ModalWrapper';
import { useStaticCalendar } from 'hooks/useStaticCalendar';
import CalendarMonth from '../calendar-month/CalendarMonth';
import './calendar-modal.css';

function CalendarModal() {
  const { buildCalendar } = useStaticCalendar();

  const calendarCollection = buildCalendar({
    startCalendar: 'start_current_month',
  });

  return (
    <Modal>
      <div className="calendarModal">
        <div className="modal-header">
          <span>Set Task</span>
          <button className="btn-calendar">
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
          <button className="btn-blue">Save</button>
          <button className="btn-outline-blue">Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

export default CalendarModal;
