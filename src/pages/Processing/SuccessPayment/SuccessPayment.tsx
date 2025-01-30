import React from 'react';
import styles from './SuccessPayment.module.scss';
import { usePayment } from '@utils/contexts/store/SuccessPaymentContext';
import { ROUTES } from '@utils/constants';
import { useNavigate } from 'react-router-dom';
import SuccessSvg from '@common/SuccessSvg/SuccessSvg';

const SuccessPayment = () => {
  const navigate = useNavigate();
  const { successPayment } = usePayment();
  const ticketInfo = successPayment.order;

  return (
    <div className={styles.successPayment}>
      <div className={styles.successIcon}>
        <SuccessSvg />
        <h1>Оплата прошла успешно!</h1>
      </div>

      <div className={styles.ticketInfo}>
        <div>
          Номер билета:
          <p className={styles.boldText}>{ticketInfo.orderNumber}</p>
        </div>
        <div>
          Фильм:
          <p className={styles.boldText}>{ticketInfo.filmName}</p>
        </div>
        <div>
          Дата и время:
          <div className={styles.boldText}>
            <span>{ticketInfo.tickets[0].seance.time}</span>
            <span>{ticketInfo.tickets[0].seance.date}</span>
          </div>
        </div>
        <div>
          Ряд:
          <div>
            {ticketInfo.tickets.map((ticket) => (
              <span className={styles.boldText} key={ticket.row}>
                {ticket.row}
              </span>
            ))}
          </div>
        </div>
        <div>
          Места:
          <div>
            {ticketInfo.tickets.map((ticket) => (
              <span className={styles.boldText} key={ticket.column}>
                {ticket.column}
              </span>
            ))}
          </div>
        </div>
        <p className={styles.note}>Вся информация будет продублирована в SMS</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.orderDetails}>Детали заказа</button>
        <button
          onClick={() => navigate(ROUTES.FILMS)}
          className={styles.mainPage}
        >
          На главную
        </button>
      </div>
    </div>
  );
};

export default SuccessPayment;
