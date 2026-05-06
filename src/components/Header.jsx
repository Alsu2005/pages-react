import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-flex">
          <div className="logo-area">
            <div className="logo-icon">
              <i className="fas fa-rocket"></i>
              <div className="logo-pulse"></div>
            </div>
            <div className="logo-text">
              <h1>Центр технического<br />творчества</h1>
              <span>МАУ ДО «ЦД(Ю)ТТ» г. Стерлитамак</span>
            </div>
          </div>
          <input type="checkbox" id="menu-toggle" style={{ display: 'none' }} />
          <nav>
            <ul className="nav-links">
              <li><NavLink to="/" end>Главная</NavLink></li>
              <li><NavLink to="/about">О нас</NavLink></li>
              <li><NavLink to="/directions">Направления</NavLink></li>
              <li><NavLink to="/news">Новости</NavLink></li>
              <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>
          </nav>
          <div className="mobile-menu-btn">
            <label htmlFor="menu-toggle" aria-label="Меню">
              <i className="fas fa-bars"></i>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;