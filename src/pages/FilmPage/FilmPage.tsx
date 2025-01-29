import React from 'react';
import styles from './FilmPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useRequestFilmQuery,
  useRequestFilmScheduleQuery,
} from '@utils/api/hooks';
import Rating from '@common/Rating/Rating';
import Schedule from '@components/Schedule/Schedule';
import { BASE_URL } from '@utils/api/instace';

const FilmPage = () => {
  const { filmId } = useParams();
  const navigate = useNavigate();
  if (!filmId) return;
  const {
    data: filmQueryData,
    isLoading: filmQueryLoading,
    isError,
  } = useRequestFilmQuery({
    params: { id: filmId },
  });
  const { data: scheduleQueryData, isLoading: scheduleQueryLoading } =
    useRequestFilmScheduleQuery({
      params: { id: filmId },
    });
  const film = filmQueryData?.data.film;
  if (filmQueryLoading || scheduleQueryLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <button onClick={() => navigate('/')}>Назад</button>
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
        <div className={styles.detailed_info}>
          <h2>{film.name}</h2>
          <p>Фильм</p>
          <Rating rating={film.userRatings.kinopoisk} />
          <p>
            Kinopoisk - {film.userRatings.kinopoisk}, imdb-
            {film.userRatings.imdb}
          </p>
          <p>{film.description}</p>
        </div>
      </div>
      <Schedule scheduleQueryData={scheduleQueryData?.data.schedules} />
    </div>
  );
};

export default FilmPage;
