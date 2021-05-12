import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export function Header({ title, logo }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-content">
          <div className="header-logo">
            <Link to="/">
              {logo ? (
                <img src={logo} alt="logo icon" />
              ) : (
                <i className="icon-arrowLeft1" aria-hidden="true"></i>
              )}
            </Link>
            <span>{title}</span>
          </div>
          <div className="header-icon">
            <i className="icon-search"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
