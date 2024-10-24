// components/FeaturesSection.jsx
import React from 'react';
import './FeaturesSection.scss';
import { Link } from "react-router-dom";

const features = [
  {
    title: 'Простое Редактирование Грамматики',
    description: 'Исправляй грамматические ошибки, сохраняя уникальный стиль написания.',
    icon: '🔍', // Placeholder, можно заменить на иконку
  },
  {
    title: 'Генерация Креативных Идей Мгновенно',
    description: 'Открой мир вдохновения с нашим инструментом генерации идей.',
    icon: '💡',
  },
  {
    title: 'Создание Уникальных Персонажей Легко',
    description: 'Оживи своих персонажей с помощью индивидуальных предложений.',
    icon: '🛠️',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h1>Ознакомьтесь с Нашими Основными Функциями</h1>
        <p className="subtitle">
          Наши инструменты, основанные на ИИ, созданы для того, чтобы улучшить твой писательский опыт. Узнай, как мы можем помочь тебе создавать, улучшать и поднимать твои истории на новый уровень.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="services-section-buttons">
          <button className="learn-more">Узнать больше</button>
          <button className="get-started">
            <Link to="/service" className='start'>
              Начать
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};
