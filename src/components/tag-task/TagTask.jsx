import './tag-task.css';

export function TagTask({ taskArea }) {
  return (
    <div className="tagTask">
      <span>{taskArea}</span>
    </div>
  );
}
