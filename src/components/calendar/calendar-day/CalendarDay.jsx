import { useStaticCalendar } from 'hooks/useStaticCalendar';
import { useDispatch } from 'react-redux';
import { setDate } from 'redux/tasks/task.actions';

function CalendarDay({ month, day, monthPosition }) {
  const dispatch = useDispatch();
  const { handleCalendarDay } = useStaticCalendar();
  const config = handleCalendarDay({
    day,
    monthPosition,
  });

  function handleSetDate() {
    const hasDate = {
      month,
      day,
    };
    dispatch(setDate(hasDate));
  }

  return (
    <span
      className={`${config.hasDay} ${config.hasCurrentDay}`}
      onClick={handleSetDate}
    >
      {config.contentDay}
    </span>
  );
}

export default CalendarDay;
