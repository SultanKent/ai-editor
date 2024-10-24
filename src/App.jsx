import React from 'react';
import { ServiceCard } from './components/ServiceCard';
import Header from './components/Header';
import './scss/App.scss';
import { FeaturesSection } from './components/FeaturesSection';
import { ProcessSteps } from './components/ProcessSteps';
import { Footer } from './components/Footer';
import FAQ from './components/FAQ';

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
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <FeaturesSection />
      <ProcessSteps />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
