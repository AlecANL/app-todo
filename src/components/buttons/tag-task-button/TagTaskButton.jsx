import './tag-task-button.css';

function TagTaskButton({ name }) {
  return (
    <button className="tagTask">
      <div className="dot"></div>
      <span className="ellipsis">{name || 'Nassssme'}</span>
    </button>
  );
}

export default TagTaskButton;
