import axios from 'axios';
import React, { useEffect, useState } from 'react';
import s from './FilmsPage.module.scss';
import Button from '@common/Button/Button';
import Rating from '@common/Rating/Rating';
import { useRequestFilmsQuery } from '@utils/api/hooks';
import { useNavigate } from 'react-router-dom';

interface Film {
  actors: any[];
  ageRating: string;
  country: any;
  description: string;
  directors: any[];
  genres: string[];
  id: string;
  img: string;
  name: string;
  originalName: string;
  releaseDate: string;
  runtime: number;
  userRatings: { kinopoisk: string; imdb: string };
}

const FilmsPage = () => {
  const { data, error, isLoading, isError } = useRequestFilmsQuery();
  const navigate = useNavigate();
  const BASE_URL = 'https://shift-intensive.ru/api'; // Базовый URL сервера

  if (isLoading) return <div>Загрузка</div>;
  console.log(data.data, error);
  return (
    <main className={s.container}>
      <h1>Афиша</h1>
      <div className={s.filmsGrid}>
        {data.data.films.map((film) => (
          <div key={film.id} className={s.filmCard}>
            <div className={s.imageContainer}>
              <img src={`${BASE_URL}${film.img}`} alt={film.name} />
              <div className={s.filmCard_info}>
                <ul>
                  {film.genres.map((genre) => {
                    return <li key={genre}>{genre}</li>;
                  })}
                </ul>
                <p>
                  {film.country.name}, {film.releaseDate}
                </p>
              </div>
            </div>
            <h2>{film.name}</h2>
            <p>Фильм</p>
            <Rating rating={film.userRatings.kinopoisk} />
            <p>
              Kinopoisk - {film.userRatings.kinopoisk}, imdb-{' '}
              {film.userRatings.imdb}
            </p>
            <Button onClick={() => navigate(`/film/${film.id}`)} id={film.id}>
              Подробнее
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FilmsPage;
