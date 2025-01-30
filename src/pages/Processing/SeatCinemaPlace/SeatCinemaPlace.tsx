import React, { useContext, useState } from 'react';
import styles from './SeatCinemaPlace.module.scss';
import Button from '@common/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '@utils/contexts';
import Tooltip from '@common/Tooltip/Tooltip';

const hallTypesObject = {
  Red: 'Красный',
  Green: 'Зеленый',
  Blue: 'Синий',
};

const SeatCinemaPlace = () => {
  const [selectedSeats, setSelectedSeats] = useState<
    Array<{ price: number; id: number; seatId: number }>
  >([]);
  const { sharedData, setSharedData } = useContext(AppContext);
  const navigate = useNavigate();
  const { filmId } = useParams();

  console.log(sharedData);

  const handleSeatClick = ({ price, id, seatId }) => {
    setSelectedSeats((prevSeats) => {
      const seatIndex = prevSeats.findIndex(
        (seat) => seat.id === id && seat.seatId === seatId
      );

      if (seatIndex !== -1) {
        // Если место уже выбрано, удаляем его
        return prevSeats.filter((_, index) => index !== seatIndex);
      } else {
        // Если место не выбрано, добавляем его
        return [...prevSeats, { price, id, seatId }];
      }
    });
  };

  const handleBuyClick = () => {
    setSharedData({ ...sharedData, selectedSeats });
    navigate(`/processing/identify/${filmId}`);
  };

  const hallName = sharedData.selectedHallAndTime.hall.name;

  console.log(selectedSeats);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Выбор места</h1>
      <div className={styles.step}>Шаг 1 из 3</div>

      <div className={styles.screen}>Экран</div>

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
                      } ${
                        selectedSeats.some(
                          (seat) =>
                            seat.id === id + 1 && seat.seatId === seatId + 1
                        )
                          ? styles.selected
                          : ''
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
          <span>{hallTypesObject[hallName]}</span>
          <div className={styles.dateTime}>
            <span>Дата и время:</span>
            <span>
              {sharedData.seanceDate} {sharedData.selectedHallAndTime.time}
            </span>
          </div>
          <div className={styles.seatInfo}>
            <span>Места:</span>
            <span>
              {selectedSeats
                .sort((a, b) => a.id - b.id || a.seatId - b.seatId)
                .map((seat) => `${seat.id} ряд - ${seat.seatId}`)
                .join(', ')}
            </span>
          </div>
          <div className={styles.total}>
            <span>Сумма:</span>
            <span>
              {selectedSeats.reduce((sum, seat) => sum + seat.price, 0)} ₽
            </span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Button onClick={() => navigate(`/film/${filmId}`)}>Назад</Button>
        <Button onClick={handleBuyClick}>Купить</Button>
      </div>
    </div>
  );
};

export default SeatCinemaPlace;
