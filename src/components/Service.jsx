// components/Service.jsx
import React from 'react';
import { ServiceCard } from './ServiceCard';
import { motion } from 'framer-motion';
import './Service.scss';

export const Service = () => {
  const services = [
    { id: 1, title: 'Редактировать грамматику', description: 'Исправление грамматических ошибок', component: 'GrammarCorrection' },
    { id: 2, title: 'Оценить главу', description: 'Оценка на основе профессиональных рецензий', component: 'ChapterEvaluation' },
    { id: 3, title: 'Генерация идей для продолжения', description: 'Генерация оригинальных идей для вашей истории', component: 'IdeaGeneration' },
    { id: 4, title: 'Помощь с планировкой сюжета', description: 'Формирование сюжета с учётом персонажей и арок', component: 'PlotPlanning' },
    { id: 5, title: 'Создание персонажей', description: 'Создание персонажей с глубокими историями и психологиями', component: 'CharacterCreation' },
    { id: 6, title: 'Переписать в стиле известного человека', description: 'Стилизация под известных писателей', component: 'RewriteInFamousStyle' },
    { id: 7, title: 'Переписать главу', description: 'Переписать главу с усилением эмоций и логики', component: 'RewriteChapter' },
    { id: 8, title: 'Помощь с описанием местности', description: 'Создание детализированных описаний окружения', component: 'LocationDescription' },
    { id: 9, title: 'Заголовки и аннотации для книги', description: 'Генерация заголовков и аннотаций', component: 'TitleSynopsisGeneration' },
    { id: 10, title: 'Перевод на английский', description: 'Качественный литературный перевод на английский язык', component: 'LiteraryTranslation' },
    { id: 11, title: 'Индивидуальный коучинг и рекомендации по саморазвитию', description: 'не просто советы по тексту, но и подсказки, какие навыки стоит развивать автору, какие книги почитать, на что обратить внимание в будущем, исходя из стиля и жанра произведения.', component: 'IndividualCoacher' },
  ];

  return (
    <div className="services-page">
      <motion.h1
        className="services-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Наши Услуги
      </motion.h1>
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
