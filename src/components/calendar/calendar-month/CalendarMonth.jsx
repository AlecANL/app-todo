import { useStaticCalendar } from 'hooks/useStaticCalendar';
import CalendarDay from '../calendar-day/CalendarDay';
import './calendar-month.css';

function CalendarMonth({ month, year, days, monthPosition }) {
  const { weekDays } = useStaticCalendar();
  return (
    <article className="calendarMonth">
      <div className="calendarMonth-header">
        <span className="month">{month}</span>
        <span className="year">{year}</span>
      </div>
      <div className="calendarMonth-weekDays">
        {weekDays.map(weekDay => (
          <span key={weekDay}>{weekDay.charAt(0)}</span>
        ))}
      </div>
      <div className="grid-days">
        {days.map(day => (
          <CalendarDay
            key={day}
            day={day}
            month={month}
            monthPosition={monthPosition}
          />
        ))}
      </div>
    </article>
  );
}

export default CalendarMonth;
