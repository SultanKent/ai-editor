// components/Footer.jsx
import React from 'react';
import './Footer.scss';
import EditAura from './EditAura.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={EditAura} alt="" />
        </div>

        <div className="footer-links">
          <div className="links-group">
            <h4>Быстрые ссылки</h4>
            <ul>
              <li><a href="/home">Главная</a></li>
              <li><a href="/services">Услуги</a></li>
              <li><a href="/blog">Блог</a></li>
              <li><a href="/contact">Связаться с нами</a></li>
              <li><a href="/faq">Часто задаваемые вопросы</a></li>
            </ul>
          </div>

          <div className="links-group">
            <h4>Будьте на связи</h4>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
              <li><a href="https://youtube.com">YouTube</a></li>
            </ul>
          </div>

          <div className="links-group">
            <h4>Рассылка</h4>
            <ul>
              <li><a href="/subscribe">Подписаться сейчас</a></li>
              <li><a href="/updates">Последние обновления</a></li>
              <li><a href="/offers">Специальные предложения</a></li>
              <li><a href="/company-info">О компании</a></li>
              <li><a href="/careers">Карьера</a></li>
            </ul>
          </div>

          <div className="subscribe">
            <h4>Подписка</h4>
            <p>Присоединяйтесь к нашей рассылке, чтобы быть в курсе новинок и обновлений.</p>
            <form>
              <input type="email" placeholder="Введите ваш email" />
              <button type="submit">Подписаться</button>
            </form>
            <p className="privacy-note">
              Подписываясь, вы соглашаетесь с нашей <a href="/privacy-policy">Политикой конфиденциальности</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Relume. Все права защищены.</p>
        <ul className="footer-terms">
          <li><a href="/privacy-policy">Политика конфиденциальности</a></li>
          <li><a href="/terms-of-service">Условия использования</a></li>
          <li><a href="/cookies-settings">Настройки файлов cookie</a></li>
        </ul>
        <div className="social-icons">
          <a href="https://facebook.com">FB</a>
          <a href="https://twitter.com">TW</a>
          <a href="https://instagram.com">IG</a>
          <a href="https://linkedin.com">IN</a>
          <a href="https://youtube.com">YT</a>
        </div>
      </div>
    </footer>
  );
};
