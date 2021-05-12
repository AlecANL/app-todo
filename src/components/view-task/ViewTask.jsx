import React from 'react';
import './view-tasks.css';

export function ViewTask({ icon, title, color }) {
  return (
    <li className="viewTask">
      <div className="viewTask-logo">
        <i className={`${icon} ${color}`}></i>
      </div>
      <div className="viewTask-description">
        <span>{title}</span>
      </div>
    </li>
  );
}
