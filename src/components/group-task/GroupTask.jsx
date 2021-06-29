import Wrapper from 'components/wrapper/Wrapper';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeView } from 'redux/ui/ui.actions';
import './group.css';

const GroupTaskData = [
  {
    id: 1,
    name: 'projects',
    taskTypeList: ['Person', 'Work', 'Shop', 'Hobbies'],
  },
  {
    id: 2,
    name: 'school',
    taskTypeList: ['english', 'programing', 'math'],
  },
];

const colors = ['#fe8c85', '#96c2eb', '#6acabc', '#b8b8b8'];

function getColor() {
  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

function GroupTask() {
  return (
    <section className="groupTask">
      <Wrapper>
        <div className="groupTask-content">
          {GroupTaskData.map(groupTaskType => (
            <GroupTaskType
              key={groupTaskType.id}
              id={groupTaskType.id}
              name={groupTaskType.name}
              taskTypeList={groupTaskType.taskTypeList}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

function GroupTaskType(taskType) {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const accordionRef = useRef(null);

  useEffect(() => {
    setHeight(isActive && `${accordionRef.current.scrollHeight}px`);
  }, [isActive]);

  function handleAccordion() {
    setIsActive(!isActive);
  }

  return (
    <div className={`groupTaskType ${isActive && 'is-active'}`}>
      <div className="groupTaskType-title" onClick={handleAccordion}>
        <span>{taskType?.name}</span>
        <i className="icon-arrowLeft1"></i>
      </div>
      <div
        className="groupTaskType-list"
        ref={accordionRef}
        style={{ maxBlockSize: height }}
      >
        {taskType?.taskTypeList.map((typeTask, i) => (
          <TaskType key={i} name={typeTask} />
        ))}
      </div>
    </div>
  );
}

function TaskType({ name }) {
  const color = getColor();
  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('current_section', name);
  // }, [name]);

  function handleChangePage() {
    localStorage.setItem('current_section', name);
    dispatch(changeView(name));
    history.push('/tasks');
  }
  return (
    <ul className="taskTypeList">
      <li onClick={handleChangePage}>
        <div
          className="dot"
          style={{
            background: color,
          }}
        ></div>
        <span>{name}</span>
      </li>
    </ul>
  );
}

export default GroupTask;
