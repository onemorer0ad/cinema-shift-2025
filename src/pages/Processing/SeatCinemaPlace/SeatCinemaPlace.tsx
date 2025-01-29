import React, { useContext, useState } from 'react';
import styles from './SeatCinemaPlace.module.scss';
import Button from '@common/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '@utils/contexts';
import Tooltip from '@common/Tooltip/Tooltip';

const SeatCinemaPlace: React.FC = () => {
  const [selectedSeat, setSelectedSeat] = useState();
  const { sharedData, setSharedData } = useContext(AppContext);
  const navigate = useNavigate();
  const { filmId } = useParams();

  const handleSeatClick = ({ price, id, seatId }) => {
    setSelectedSeat({ price, id, seatId });
  };

  console.log(selectedSeat);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Выбор места</h1>
      <div className={styles.step}>Шаг 1 из 3</div>

      <div className={styles.screen}>Экран</div>

      <div className={styles.priceInfo}>
        <span className={styles.price}>{selectedSeat?.price}</span>
        <span className={styles.seatType}>
          {selectedSeat?.id} ряд, {selectedSeat?.seatId} место
        </span>
      </div>

      <div className={styles.seatsContainer}>
        {sharedData?.selectedHallAndTime.hall.places.map((place, id) => {
          return (
            <div key={id} className={styles.row}>
              <span className={styles.rowNumber}>{id + 1}</span>
              {place.map((seatElement, seatId) => {
                // console.log(seatElement.price, id, seatId);
                return (
                  <Tooltip
                    content={{
                      price: seatElement.price,
                      id: id + 1,
                      seatId: seatId + 1,
                    }}
                    key={seatId}
                  >
                    <button
                      disabled={
                        seatElement.type == 'BLOCKED' ? true : undefined
                      }
                      className={`${styles.seat} ${
                        seatElement.type == 'BLOCKED' ? styles.blocked : ''
                      }`}
                      onClick={() =>
                        handleSeatClick({
                          price: seatElement.price,
                          id: id + 1,
                          seatId: seatId + 1,
                        })
                      }
                    />
                  </Tooltip>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={styles.info}>
        <div className={styles.legend}>
          <span className={styles.blueText}>Синий</span>
          <div className={styles.dateTime}>
            <span>Дата и время:</span>
            <span>
              {sharedData.seanceDate} {sharedData.selectedHallAndTime.time}
            </span>
          </div>
          <div className={styles.seatInfo}>
            <span>Места:</span>
            <span>2 ряд - 8, 9</span>
          </div>
          <div className={styles.total}>
            <span>Сумма:</span>
            <span>500 ₽</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Button onClick={() => navigate(`/film/${filmId}`)}>Назад</Button>
        <Button onClick={() => navigate(`/processing/identify/${filmId}`)}>
          Купить
        </Button>
      </div>
    </div>
  );
};

export default SeatCinemaPlace;
