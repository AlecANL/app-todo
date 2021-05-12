import { CalendarDay } from '../calendar-day/CalendarDay';
import './calendar-item.css';

export function CalendarItem({ currentMonth, year, paddingDays, daysInMonth }) {
  function buildCalendar() {
    const dateObj = {
      currentMonth,
      year,
    };
    const days = [];
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const day = i - paddingDays;
      days.push(<CalendarDay key={i} day={day} {...dateObj} />);
    }
    return days;
  }
  return (
    <>
      <div className="calendar">
        <div className="calendar-heading">
          <span>{currentMonth}</span>
          <span>{year}</span>
        </div>
        <div className="calendar-days">
          <span>L</span>
          <span>M</span>
          <span>M</span>
          <span>J</span>
          <span>V</span>
          <span>S</span>
          <span>D</span>
        </div>
        <div className="calendar-value">{buildCalendar()}</div>
      </div>
    </>
  );
}
