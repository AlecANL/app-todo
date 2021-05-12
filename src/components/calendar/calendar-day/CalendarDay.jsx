import { useContext } from 'react';
import TodoContext from '../../../contexts/TodoContext/TodoContext';
import './calendar-day.css';

export function CalendarDay({ day, currentMonth, year }) {
  const { setDate } = useContext(TodoContext);
  function handleSetDate() {
    setDate({
      day,
      year,
      month: currentMonth,
    });
  }
  return (
    <span
      className={`${day > 0 ? 'day' : 'padding-day'}`}
      onClick={handleSetDate}
    >
      {day > 0 ? `${day}` : null}
    </span>
  );
}
