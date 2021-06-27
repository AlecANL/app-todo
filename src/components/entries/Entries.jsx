import Wrapper from 'components/wrapper/Wrapper';
import './entries.css';

const entriesData = [
  {
    id: 1,
    name: 'inbox',
    icon: 'icon-document',
  },
  {
    id: 2,
    name: 'today',
    icon: 'icon-calendar',
  },
  {
    id: 3,
    name: 'soon',
    icon: 'icon-calendar-v2',
  },
];

function Entries() {
  return (
    <div className="entries">
      <Wrapper>
        <div className="entries-content">
          <ul className="entries-list">
            {entriesData.map(entry => (
              <Entry key={entry.id} name={entry.name} icon={entry.icon} />
            ))}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}

function Entry({ name, icon }) {
  return (
    <li className="entry">
      <i className={icon}></i>
      <span>{name}</span>
    </li>
  );
}

export default Entries;
