import React from 'react';
import './task-menu-item.css';

function TaskMenuItem({ icon, title, color }) {
  return (
    <div className="taskMenuItem">
      <div className="taskMenuItem-logo">
        <i className={`${icon} ${color}`}></i>
      </div>
      <div className="taskMenuItem-description">
        <span>{title}</span>
      </div>
    </div>
  );
}
export default TaskMenuItem;
