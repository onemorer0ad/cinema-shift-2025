import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import { ROUTES } from '@utils/constants';
import FilmsPage from '@pages/FilmsPage/FilmsPage';
import FilmPage from '@pages/FilmPage/FilmPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path={ROUTES.FILMS} element={<FilmsPage />} />
        <Route path={ROUTES.FILM} element={<FilmPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
