import './tag-task.css';

export function TagTask({ taskArea, isBorder }) {
  return (
    <div className={`tagTask ${isBorder && 'is-border'}`}>
      <span className="ellipsis">{taskArea}</span>
    </div>
  );
}
