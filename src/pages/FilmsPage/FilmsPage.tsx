import React from 'react';
import styles from './FilmsPage.module.scss';
import Button from '@common/Button/Button';
import Rating from '@common/Rating/Rating';
import { useRequestFilmsQuery } from '@utils/api/hooks';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '@utils/api/instace';

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

  if (isLoading) return <div>Загрузка</div>;
  return (
    <main className={styles.container}>
      <h1>Афиша</h1>
      <div className={styles.filmsGrid}>
        {data.data.films.map((film) => (
          <div key={film.id} className={styles.filmCard}>
            <div className={styles.imageContainer}>
              <img src={`${BASE_URL}${film.img}`} alt={film.name} />
              <div className={styles.filmCard_info}>
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
