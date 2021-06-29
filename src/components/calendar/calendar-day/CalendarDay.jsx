import { useStaticCalendar } from 'hooks/useStaticCalendar';

function CalendarDay({ day, monthPosition }) {
  const { handleCalendarDay } = useStaticCalendar();
  const config = handleCalendarDay({
    day,
    monthPosition,
  });

  return (
    <span className={`${config.hasDay} ${config.hasCurrentDay}`}>
      {config.contentDay}
    </span>
  );
}

export default CalendarDay;
