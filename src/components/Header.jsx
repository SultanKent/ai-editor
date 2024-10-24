import React from 'react';
import './Header.scss';
import header_img from './th.jpeg';
import { Link } from "react-router-dom";
import EditAura from './EditAura.png'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <img src={EditAura} alt="" />
          </div>
          <ul className="nav-links">
            <li><a href="#">Наши Услуги</a></li>
            <li><a href="#">О Нас</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Блог</a></li>
            <li>
              <Link to="/auth">авторизоваться</Link>
            </li>
          </ul>
          <Link to="/service" className='get-started start'>
              Начать
          </Link>
        </nav>
        <div className="header-content">
            <div className="header-content-left">
              <h1>Создай свою идеальную книгу с помощью ИИ</h1>
              <p>Используй автоматическую коррекцию ошибок, генерацию идей, создание персонажей и многое другое. Пусть наш ИИ станет твоим творческим партнёром в написании.</p>
              <div className="header-buttons">
                <button className="try">
                <Link to="/service">
                  Попробовать
                </Link>
                </button>
                <button className="learn-more">Узнать больше</button>
              </div>
            </div>
            <div className='header-content-right'>
                <img src={header_img} alt="" />
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;