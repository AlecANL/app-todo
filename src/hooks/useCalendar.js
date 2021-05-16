import { useContext } from 'react';
import TodoContext from '../contexts/TodoContext/TodoContext';

const weekdays = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo',
];

function getCurrentDate() {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
  };
}

export function useCalendar() {
  const { showCalendar, setShowCalendar, setDate } = useContext(TodoContext);

  function handleCurrentDate(indexMonth) {
    const { year } = getCurrentDate();
    const firstDayByMonth = new Date(year, indexMonth, 1);
    const daysInMonth = new Date(year, indexMonth + 1, 0).getDate();
    const dateString = firstDayByMonth.toLocaleDateString('es-us', {
      weekday: 'long',
      year: 'numeric',

      month: 'long',
      day: 'numeric',
    });

    const currentMonth = dateString.split(' ')[3];
    const emptyDaysByMonth = weekdays.indexOf(dateString.split(', ')[0]);
    return {
      daysInMonth,
      emptyDaysByMonth,
      currentMonth,
      year,
    };
  }

  function handleCloseCalendar() {
    setShowCalendar(false);
  }

  function handleResetCalendar() {
    setDate({
      day: null,
      year: null,
      month: null,
    });
  }

  return {
    handleCloseCalendar,
    handleResetCalendar,
    showCalendar,
    handleCurrentDate,
    currenMonth: new Date().getMonth(),
  };
}
