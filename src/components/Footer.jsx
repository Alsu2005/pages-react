import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <i className="fas fa-rocket"></i>
              <h3>ЦД(Ю)ТТ</h3>
            </div>
            <p>Центр детского (юношеского) технического творчества г. Стерлитамак</p>
          </div>
          <div className="footer-col">
            <h4>Навигация</h4>
            <ul>
              <li><NavLink to="/">Главная</NavLink></li>
              <li><NavLink to="/about">О нас</NavLink></li>
              <li><NavLink to="/directions">Направления</NavLink></li>
              <li><NavLink to="/news">Новости</NavLink></li>
              <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Контакты</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> г. Стерлитамак, ул. Коммунистическая, 12</li>
              <li><i className="fas fa-phone"></i> +7 (3473) 25-55-33</li>
              <li><i className="fas fa-envelope"></i> cdutt@sterlitamak.ru</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Социальные сети</h4>
            <div className="social-links">
              <a href="https://vk.com/cdutt_str" target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте">
                <i className="fab fa-vk"></i>
              </a>
              <a href="https://e.mail.ru/login" target="_blank" rel="noopener noreferrer" aria-label="Мой Мир">
                <i className="fas fa-globe"></i>
              </a>
              <a href="https://ok.ru/tsdyutttek" target="_blank" rel="noopener noreferrer" aria-label="Одноклассники">
                <i className="fab fa-odnoklassniki"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 МАУ ДО «Центр детского (юношеского) технического творчества» г. Стерлитамак. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;