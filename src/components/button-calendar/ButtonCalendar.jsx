import React, { useContext } from 'react';
import TodoContext from '../../contexts/TodoContext/TodoContext';
import './button-calendar.css';

export function ButtonCalendar({ day, month }) {
  const { setShowCalendar } = useContext(TodoContext);

  function handleOpenCalendar() {
    setShowCalendar(true);
  }
  return (
    <button className="btn-calendar" onClick={handleOpenCalendar}>
      <i className="icon-calendar" aria-hidden="true" />
      <span> {day && month ? `${day} ${month}` : 'Sin fecha'}</span>
    </button>
  );
}
// export default React.memo(ButtonCalendar);
