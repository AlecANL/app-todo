import { useState } from 'react';

export function useStaticCalendar() {
  const getFirstDayByMonth = 1;
  const getAllDaysByMonth = 0;
  const amountMonths = 11;

  const weekDays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  const [date] = useState({
    current_year: new Date().getFullYear(),
    current_month: new Date().getMonth(),
    current_day: new Date().getDate(),
  });

  function handleCurrentDate(indexMonth) {
    const firstDayByMonth = new Date(
      date.current_year,
      indexMonth,
      getFirstDayByMonth
    );

    const daysInMonth = new Date(
      date.current_year,
      indexMonth + 1,
      getAllDaysByMonth
    ).getDate();

    const { month, weekDay, year } = formatDate(firstDayByMonth);
    const getDayPosition = weekDays.indexOf(weekDay.toLowerCase());
    return {
      month,
      getDayPosition,
      daysInMonth,
      year,
      monthPosition: indexMonth,
    };
  }

  function formatDate(date = new Date()) {
    const month = date.toLocaleDateString('en-us', {
      month: 'long',
    });
    const weekDay = date.toLocaleDateString('en-us', {
      weekday: 'long',
    });
    const year = date.toLocaleDateString('en-us', {
      year: 'numeric',
    });
    const monthPosition = date.toLocaleDateString('en-us', {
      month: 'numeric',
    });
    return {
      month,
      weekDay,
      year,
      monthPosition,
    };
  }

  function chooseOption(optionCalendar) {
    switch (optionCalendar.startCalendar) {
      case 'start_current_month':
        return {
          indexMonth: new Date().getMonth(),
          amountMonths,
        };
      case 'full_calendar':
        return {
          indexMonth: 0,
          amountMonths,
        };
      case 'single_current_month':
        return {
          indexMonth: new Date().getMonth(),
          amountMonths: new Date().getMonth(),
        };
      default:
        return {
          indexMonth: new Date().getMonth(),
          amountMonths,
        };
    }
  }

  function buildCalendar(optionCalendar) {
    if (!optionCalendar) return console.warn('please enter a valid option');

    const calendar = [];
    const { indexMonth, amountMonths } = chooseOption(optionCalendar);
    for (let i = indexMonth; i <= amountMonths; i++) {
      const { month, daysInMonth, getDayPosition, year, monthPosition } =
        handleCurrentDate(i);
      calendar.push({
        month,
        daysInMonth,
        getDayPosition,
        year,
        monthPosition,
        days: [],
      });
    }
    const calendarCompleted = loadDays(calendar);
    return calendarCompleted;
  }

  function loadDays(calendarCollection) {
    calendarCollection.forEach(item => {
      for (let i = 1; i <= item.daysInMonth + item.getDayPosition; i++) {
        const day = i - item.getDayPosition;
        item.days.push(day);
      }
    });
    return calendarCollection;
  }

  function handleCalendarDay(obj) {
    const { monthPosition, day } = obj;
    const hasDay = day > 0 ? 'day' : 'empty-day';
    const contentDay = day > 0 ? day : null;
    if (date.current_month === monthPosition && date.current_day === day) {
      return {
        hasDay,
        contentDay,
        hasCurrentDay: 'current-day',
      };
    } else {
      return {
        hasDay,
        contentDay,
        hasCurrentDay: '',
      };
    }
  }
  return {
    buildCalendar,
    handleCalendarDay,
    weekDays,
  };
}
