import React, { useState } from 'react';
import styles from './SeatCinemaPlace.module.scss';

const SeatCinemaPlace: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const rows = 6;
  const seatsPerRow = 10;

  const handleSeatClick = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Выбор места</h1>
      <div className={styles.step}>Шаг 1 из 3</div>

      <div className={styles.screen}>Экран</div>

      <div className={styles.priceInfo}>
        <span className={styles.price}>300 ₽</span>
        <span className={styles.seatType}>1 ряд, 5 место</span>
      </div>

      <div className={styles.seatsContainer}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            <span className={styles.rowNumber}>{rowIndex + 1}</span>
            {Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
              const seatId = `${rowIndex + 1}-${seatIndex + 1}`;
              return (
                <button
                  key={seatId}
                  className={`${styles.seat} ${
                    selectedSeats.includes(seatId) ? styles.selected : ''
                  }`}
                  onClick={() => handleSeatClick(seatId)}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className={styles.info}>
        <div className={styles.legend}>
          <span className={styles.blueText}>Синий</span>
          <div className={styles.dateTime}>
            <span>Дата и время:</span>
            <span>3 июля 13:45</span>
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
        <button className={styles.backButton}>Назад</button>
        <button className={styles.buyButton}>Купить</button>
      </div>
    </div>
  );
};

export default SeatCinemaPlace;
