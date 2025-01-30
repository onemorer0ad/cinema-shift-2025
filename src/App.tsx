import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import { ROUTES } from '@utils/constants';
import FilmsPage from '@pages/FilmsPage/FilmsPage';
import FilmPage from '@pages/FilmPage/FilmPage';
import SeatCinemaPlace from '@pages/Processing/SeatCinemaPlace/SeatCinemaPlace';
import IdentifyFormCinema from '@pages/Processing/IdentifyFormCinema/IdentifyFormCinema';
import PaymentForm from '@pages/Processing/PaymentForm/PaymentForm';
import { ContextProvider } from '@utils/contexts';
import SuccessPayment from '@pages/Processing/SuccessPayment/SuccessPayment';
import AuthPage from '@pages/AuthPage/AuthPage';
import VerifyCodePage from '@pages/VerifyCodePage/VerifyCodePage';
import { AuthProvider } from '@utils/contexts/auth/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <ContextProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path={ROUTES.AUTH} element={<AuthPage />} />
            <Route path={ROUTES.VERIFY} element={<VerifyCodePage />} />
            <Route path={ROUTES.FILMS} element={<FilmsPage />} />
            <Route path={ROUTES.FILM} element={<FilmPage />} />
            <Route path={ROUTES.CINEMAPLACE} element={<SeatCinemaPlace />} />
            <Route path={ROUTES.IDENTIFY} element={<IdentifyFormCinema />} />
            <Route path={ROUTES.PAYMENT} element={<PaymentForm />} />
            <Route path={ROUTES.SUCCESS} element={<SuccessPayment />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </AuthProvider>
  );
};

export default App;
