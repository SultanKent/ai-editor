// components/ProcessSteps.jsx
import React from 'react';
import './ProcessSteps.scss';
import { Link } from "react-router-dom";

const steps = [
  {
    title: 'Шаг 1: Выбери нужную услугу',
    description: 'Выбери из множества индивидуально подобранных услуг.',
    icon: '📦', // Placeholder, замени на иконку или изображение, если необходимо
  },
  {
    title: 'Шаг 2: Загрузите свой текстовый документ',
    description: 'Легко загружайте свою рукопись для анализа.',
    icon: '📤',
  },
  {
    title: 'Шаг 3: Получите улучшенный контент',
    description: 'Получите отредактированный текст в кратчайшие сроки.',
    icon: '📄',
  },
];

export const ProcessSteps = () => {
  return (
    <section className="process-steps">
      <div className="process-container">
        <h1>Как взаимодействовать с нашим ИИ-помощником</h1>
        <p className="process-description">
          Взаимодействие с нашим ИИ простое и эффективное. Начните с выбора необходимой услуги,
          затем загрузите свой текст для анализа. В завершение получите быстро и легко 
          улучшенный контент.
        </p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon">{step.icon}</div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
              {index === 0 && (
                <div className="actions">
                  <button className="start-btn">
                    <Link to="/service" className='start'>
                      Начать
                    </Link>
                  </button>
                  <a href="/learn-more" className="learn-more">
                    Узнать больше &rarr;
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
