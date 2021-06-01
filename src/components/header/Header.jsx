import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export function Header({ title, logo, children }) {
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
          {children}
          <div className="header-icon">
            <Link to="/search">
              <i className="icon-search"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
