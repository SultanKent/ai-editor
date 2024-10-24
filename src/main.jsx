import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import GrammarCorrection from './components/services/GrammarCorrection';
import { Service } from './components/Service';
import Auth from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';
import ChapterEvaluation from './components/services/ChapterEvaluation';
import IdeaGeneration from './components/services/IdeaGeneration';
import PlotPlanning from './components/services/PlotPlanning'
import CharacterCreation from './components/services/CharacterCreation'
import RewriteInFamousStyle from './components/services/RewriteInFamousStyle'
import RewriteChapter from './components/services/RewriteChapter'
import LocationDescription from './components/services/LocationDescription'
import TitleSynopsisGeneration from './components/services/TitleSynopsisGeneration'
import LiteraryTranslation from './components/services/LiteraryTranslation';
import IndividualCoacher from './components/services/IndividualCoacher';

// Найдите корневой элемент для рендеринга
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/GrammarCorrection" element={<GrammarCorrection />} />
      <Route path="/auth" element={<Auth />} />
      {/* Защищенный маршрут должен быть обернут в Route */}
      <Route
        path="/service"
        element={
          <ProtectedRoute>
            <Service />
          </ProtectedRoute>
        }
      />
      {/* Остальные закомментированные роуты */}
      <Route path="/ChapterEvaluation" element={<ChapterEvaluation />} />
      <Route path="/IdeaGeneration" element={<IdeaGeneration />} />
      <Route path="/PlotPlanning" element={<PlotPlanning />} />
      <Route path="/CharacterCreation" element={<CharacterCreation />} />
      <Route path="/RewriteInFamousStyle" element={<RewriteInFamousStyle />} />
      <Route path="/RewriteChapter" element={<RewriteChapter />} />
      <Route path="/LocationDescription" element={<LocationDescription />} />
      <Route path="/TitleSynopsisGeneration" element={<TitleSynopsisGeneration />} />
      <Route path="/LiteraryTranslation" element={<LiteraryTranslation />} />
      <Route path='/IndividualCoacher' element={<IndividualCoacher />} />
    </Routes>
  </Router>
);
